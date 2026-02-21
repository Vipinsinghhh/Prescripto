import validator from "validator";
import bcrypt from "bcrypt";
import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken";
import { v2 as cloudinary } from "cloudinary";
import doctorModel from "../models/doctorModel.js";
import appointmentModel from "../models/appointmentModel.js";

// API to register user
const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        if (!name || !password || !email) {
            return res.json({ success: false, message: "Missing Details" });
        }

        //validating email format
        if (!validator.isEmail(email)) {
            return res.json({ success: false, message: "Enter a valid email" });
        }

        // validating strong password
        if (password.length < 8) {
            return res.json({ success: false, message: "Enter a strong password" });
        }

        const existingUser = await userModel.findOne({ email });
        if (existingUser) {
            return res.json({ success: false, message: "User already exists" });
        }

        // hashing user password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new userModel({
            name,
            email,
            password: hashedPassword,
        });

        const user = await newUser.save();
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);

        return res.json({ success: true, token });

    } catch (error) {
        console.log(error);
        return res.json({ success: false, message: error.message });
    }
};

// API for user login
const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await userModel.findOne({ email });

        if (!user) {
            return res.json({ success: false, message: "User does not exist" });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.json({ success: false, message: "Invalid credentials" });
        }

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
        return res.json({ success: true, token });
    } catch (error) {
        console.log(error);
        return res.json({ success: false, message: error.message });
    }
};

// API to get user profile data
const getProfile = async (req, res) => {
    try {
        const userId = req.userId; // fixed
        const userData = await userModel.findById(userId).select("-password");

        if (!userData) {
            return res.json({ success: false, message: "User not found" });
        }

        return res.json({ success: true, userData });
    } catch (error) {
        console.log(error);
        return res.json({ success: false, message: error.message });
    }
};

// API to update user profile
const updateProfile = async (req, res) => {
    try {
        const userId = req.userId; // fixed
        const { name, phone, address, dob, gender } = req.body;
        const imageFile = req.file;

        if (!name || !phone || !dob || !gender) {
            return res.json({ success: false, message: "Data Missing" });
        }

        const parsedAddress =
            typeof address === "string" ? JSON.parse(address) : address;

        const updateData = { name, phone, address: parsedAddress, dob, gender };

        if (imageFile) {
            const imageUpload = await cloudinary.uploader.upload(imageFile.path, {
                resource_type: "image",
            });
            updateData.image = imageUpload.secure_url; // fixed key (image, not Image)
        }

        await userModel.findByIdAndUpdate(userId, updateData, { new: true });

        return res.json({ success: true, message: "Profile Updated" });
    } catch (error) {
        console.log(error);
        return res.json({ success: false, message: error.message });
    }
};

// API to book appointment

const bookAppointment = async (req, res) => {
    try {

        const userId = req.userId;
        const { docId, slotDate, slotTime} = req.body
        
        const docData = await doctorModel.findById(docId).select('-password')

        if (!docData.available) {
            return res.json({success:false, message:"Doctor not available"})
        }

        let slots_booked = docData.slots_booked

        // Checking for slots availability
        if(slots_booked[slotDate]){
        if (slots_booked[slotDate].includes(slotTime)) {
            return res.json({success:false, message:"Slot not available"})
        }else{
            slots_booked[slotDate].push(slotTime)
        }
    } else{
        slots_booked[slotDate] = []
        slots_booked[slotDate].push(slotTime)
    }  

    const userData = await userModel.findById(userId).select('-password')

    delete docData.slots_booked

    const appointmentData = {
        userId,
        docId,
        userData,
        docData,
        amount:docData.fees,
        slotTime,
        slotDate,
        date: Date.now()
    }

    const newAppointment = new appointmentModel(appointmentData)
    await newAppointment.save()

    // save new slots data in docData
    await doctorModel.findByIdAndUpdate(docId,{slots_booked})

    res.json({success:true,message:'Appointment Booked'})

    } catch (error) {
        console.log(error);
        return res.json({ success: false, message: error.message });
    }
}

// API to get user appointments for frontend my-appointment page

const listAppointment = async (req,res) => {

    try {
        
        const userId = req.userId
        const appointments = await appointmentModel.find({userId})
        return res.json({success:true,appointments})
    } catch (error) {
         console.log(error);
        return res.json({ success: false, message: error.message });
    }
}

export { registerUser, loginUser, getProfile, updateProfile, bookAppointment, listAppointment };
