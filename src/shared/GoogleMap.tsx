function GoogleMap() {
  return (
    <div className="my-5">
      <iframe
        title="Google Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3010.4270908162594!2d-73.84447820000001!3d41.0159112!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2eb548152738b%3A0x5e7089da09ac5815!2s2%20Revolutionary%20Rd%2C%20Ardsley%2C%20NY%2010502!5e0!3m2!1sen!2sus!4v1698208754260!5m2!1sen!2sus"
        width="400"
        height="300"
        style={{ border: 0 }}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}

export default GoogleMap;
