const BaseService = require("./base.service");
const crypto = require("crypto");

let _config = null;

class ZoomService extends BaseService {
  constructor({ config }) {
    super(config);
    _config = config;
  }
  async generateSignature(meetingNumber, role) {
    const timestamp = new Date().getTime() - 30000;
    const msg = Buffer.from(_config.ZOOM_API_KEY + meetingNumber + timestamp + role).toString(
      "base64"
    );
    const hash = crypto
      .createHmac("sha256", _config.ZOOM_API_SECRET)
      .update(msg)
      .digest("base64");

    return Buffer.from(
      `${_config.ZOOM_API_KEY}.${meetingNumber}.${timestamp}.${role}.${hash}`
    ).toString("base64");
  }
}

module.exports = ZoomService;
