import mongoose from 'mongoose';

const tariffSchema = new mongoose.Schema({
  tariff: String,
  options: [String],
  description: String
});

const TariffModel = mongoose.model('Tariff', tariffSchema);

export default TariffModel;