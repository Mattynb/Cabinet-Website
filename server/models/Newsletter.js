const subscriberSchema = new mongoose.Schema({
    email: {
      type: String,
      required: true,
      unique: true
    }
  });
  
  const Subscriber = mongoose.model('Subscriber', subscriberSchema);