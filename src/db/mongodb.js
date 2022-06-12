import mongoose from 'mongoose';

mongoose.connect(process.env.MONGO_URL_CONECTION)

mongoose.connection.on("error", (error) => console.log(`\n- [ DB ] Error.`))

mongoose.connection.on("connected", () => console.log(`\n- [ DB ] connected ...`))

mongoose.connection.on("disconnected", () => console.log(`\n- [ DB ] disconnected.`))

export default mongoose
