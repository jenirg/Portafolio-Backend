const mongoose = require('mongoose');
async function connect() {
    try {
        await mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.u1qt6rq.mongodb.net/blogs?retryWrites=true&w=majority&appName=Cluster0`, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Conexión a MongoDB Atlas exitosa');
    } catch (error) {
        console.error('Error conectando a MongoDB Atlas:', error);
    }
}

module.exports = { connect };