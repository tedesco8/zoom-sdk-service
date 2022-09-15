let _zoomService = null;
class ZoomController {
  constructor({ ZoomService }) {
    _zoomService = ZoomService;
  }
  async getSignature(req, res) {
    const { meetingNumber, role } = req.query;
    const signature = await _zoomService.generateSignature(meetingNumber, role)
    return res.json({signature: signature});
  }
}

module.exports = ZoomController;
