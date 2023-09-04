import mongoose, { connect, ConnectOptions } from "mongoose";

mongoose.set("strictQuery", false);

export const dbConnect = () => {
  connect(
    "mongodb+srv://kuanysh:cpiZf8zPHLICEUQ0@cluster0.sby7wsn.mongodb.net/test?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    } as ConnectOptions
  )
    .then(() => {
      console.log("Connected to MongoDB");
    })
    .catch((error) => {
      console.error("Error connecting to MongoDB:", error);
    });
};
