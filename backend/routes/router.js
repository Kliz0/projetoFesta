const router = require("express").Router();

// Services Router
const servicesRouter = require("./services");

router.use("/", servicesRouter);

const partyRouter = require("./parties");

router.use("/", partyRouter);

module.exports = router;
