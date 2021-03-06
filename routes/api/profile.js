const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const { check, validationResult } = require('express-validator/check');

const Profile = require('../../models/Profile');
const User = require('../../models/User');
const multer = require('multer');
const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, './profilepics');
  },
  filename: function(req, file, cb) {
    cb(null, new Date().toISOString() + file.originalname);
  }
});

const fileFilter = (req, file, cb) => {
  if (
    file.mimetype === 'image/jpeg' ||
    file.mimetype === 'image/png' ||
    file.mimetype === 'application/pdf'
  ) {
    cb(null, true);
  } else {
    cb(new Error('Only .jpeg or .png or pdf files are accepted'), false);
  }
};

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 6
  },
  fileFilter: fileFilter
});

var cpUpload = upload.fields([{ name: 'photo', maxCount: 1 }]);
//@route    GET api/profile/me
//@desc     Get Current Users Profile
//@access   Private
router.get('/me', auth, async (req, res) => {
  try {
    const profile = await Profile.findOne({ user: req.user.id }).populate(
      'user',
      ['name', 'avatar']
    );

    if (!profile) {
      return res.status(400).json({ msg: 'There is no Profile for this User' });
    }
    //else send the profile
    res.json(profile);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

//@route    POST api/profile
//@desc     Create or Update User Profile
//@access   Private

router.post(
  '/',
  upload.single('photo'),
  auth,
  [
    check('status', 'Status is required')
      .not()
      .isEmpty(),
    check('designation', 'Designation is required')
      .not()
      .isEmpty()
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const {
      name,
      officeaddrss,
      personalmobno,
      officemobno,
      emailidpersonal,
      emailidoffice,
      dateofjoining,
      company,
      website,
      location,
      status,
      designation,
      githubusername,
      bio
    } = req.body;

    const photo = null;
    // const photo = req.file;
    //Build Profile object
    const profileFields = {};
    // console.log(req.file.path);
    profileFields.user = req.user.id;
    if (req.file !== undefined) profileFields.photo = req.file.path;
    // profileFields.photo = req.file == undefined ? '' : req.file.path;
    if (name) profileFields.name = name;
    if (photo) profileFields.photo = photo;
    if (officeaddrss) profileFields.officeaddrss = officeaddrss;
    if (personalmobno) profileFields.personalmobno = personalmobno;
    if (officemobno) profileFields.officemobno = officemobno;
    if (emailidpersonal) profileFields.emailidpersonal = emailidpersonal;
    if (emailidoffice) profileFields.emailidoffice = emailidoffice;
    if (dateofjoining) profileFields.dateofjoining = dateofjoining;
    if (status) profileFields.status = status;
    if (designation) profileFields.designation = designation;
    if (company) profileFields.company = company;
    if (website) profileFields.website = website;
    if (location) profileFields.location = location;
    if (githubusername) profileFields.githubusername = githubusername;
    if (bio) profileFields.bio = bio;

    try {
      let profile = await Profile.findOne({ user: req.user.id });
      if (profile) {
        //Update Profile
        profile = await Profile.findOneAndUpdate(
          { user: req.user.id },
          { $set: profileFields },
          { new: true }
        );
        return res.json(profile);
      }

      //Create
      profile = new Profile(profileFields);

      await profile.save();
      res.json(profile);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

//@route    Get api/profile
//@desc     Get all Profiles
//@access   Public
router.get('/', async (req, res) => {
  try {
    const profiles = await Profile.find().populate('user', ['name', 'avatar']);
    res.json(profiles);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});
//@route    Get api/profile/user/:user_id
//@desc     Get Profile by User id
//@access   Public
router.get('/user/:user_id', async (req, res) => {
  try {
    const profile = await Profile.findOne({
      user: req.params.user_id
    }).populate('user', ['name', 'avatar']);

    if (!profile) return res.status(400).json({ msg: 'Profile Not Found' });
    res.json(profile);
  } catch (err) {
    console.error(err.message);
    if (err.kind == 'ObjectId') {
      return res.status(400).json({ msg: 'Profile Not Found' });
    }
    res.status(500).send('Server Error');
  }
});

//@route    DELETE api/profile
//@desc     DELETE profile ,user & posts
//@access   Private
router.delete('/:id', async (req, res) => {
  try {
    //Remove Profile
    await Profile.findOneAndRemove({ user: req.params.id });
    //Remove User
    await User.findOneAndRemove({ _id: req.params.id });
    res.status(200).send('User Removed');
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

//Add Profile Experience <---6
module.exports = router;
