import bcrypt from 'bcrypt';
import collection1 from "../schemas/userschema.js";
export const registeruser = async (req, res) => {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
        return res.status(400).json({ success: false, message: "body not recived" });
    }
    try {
        const hash = await bcrypt.hash(password, 10);
        await collection1.create({ name: name, email: email, password: hash });
        return res.status(200).json({ success: true, message: "user inserted succesfully" });
    }
    catch (err) {
        return res.status(400).json({ success: false, message: "user registration failed" });
    }
};
export const loginuser = async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({ success: false, message: "body not recived" });
    }
    const result = await collection1.findOne({ email });
    if (!result) {
        return res.status(400).json({ success: false, message: "result is empty" });
    }
    const compare = await bcrypt.compare(password, result.password);
    if (!compare) {
        return res.status(400).json({ success: false, message: "password is incorrect" });
    }
    return res.status(200).json({ success: true, message: "login succesfully done" });
};
//# sourceMappingURL=userentry.js.map