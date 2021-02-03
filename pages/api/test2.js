import config from '../../common/config'

export default (req, res) => {
  res.status(200).json(config);
};
