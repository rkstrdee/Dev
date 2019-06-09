import React, { Fragment, useState, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import Spinner from '../layout/Spinner';
import { connect } from 'react-redux';
import { editUserdata, getUserdataById } from '../../actions/userdata';

const EditUserdataById = ({
  match,
  userdata: { userdata, loading },
  editUserdata,
  getUserdataById,
  history
}) => {
  const [formData, setFormData] = useState({
    text: '',
    year: '',
    policestation: '',
    crimeregisterno: '',
    dateofcrime: '',
    regdateofcrime: '',
    victimdetails: '',
    natureofcrime: '',
    sections: '',
    chargesheetdate: '',
    policeinvestigation: '',
    courtresults: '',
    financialsupport: '',
    twitter: '',
    facebook: '',
    linkedin: '',
    youtube: '',
    instagram: ''
  });

  const [displaySocialInputs, toggleSocialInputs] = useState(false);

  useEffect(() => {
    getUserdataById(match.params.id);

    setFormData({
      text: loading || !userdata.text ? '' : userdata.text,
      year: loading || !userdata.year ? '' : userdata.year,
      policestation:
        loading || !userdata.policestation ? '' : userdata.policestation,
      crimeregisterno:
        loading || !userdata.crimeregisterno ? '' : userdata.crimeregisterno,
      dateofcrime: loading || !userdata.dateofcrime ? '' : userdata.dateofcrime,
      regdateofcrime:
        loading || !userdata.regdateofcrime ? '' : userdata.regdateofcrime,
      victimdetails:
        loading || !userdata.victimdetails ? '' : userdata.victimdetails,
      natureofcrime:
        loading || !userdata.natureofcrime ? '' : userdata.natureofcrime,
      sections: loading || !userdata.sections ? '' : userdata.sections,
      chargesheetdate:
        loading || !userdata.chargesheetdate ? '' : userdata.chargesheetdate,
      policeinvestigation:
        loading || !userdata.policeinvestigation
          ? ''
          : userdata.policeinvestigation,
      courtresults:
        loading || !userdata.courtresults ? '' : userdata.courtresults,
      financialsupport:
        loading || !userdata.financialsupport ? '' : userdata.financialsupport,
      twitter: loading || !userdata.twitter ? '' : userdata.twitter,
      facebook: loading || !userdata.facebook ? '' : userdata.facebook,
      linkedin: loading || !userdata.linkedin ? '' : userdata.linkedin,
      youtube: loading || !userdata.youtube ? '' : userdata.youtube,
      instagram: loading || !userdata.instagram ? '' : userdata.instagram
      //   text: 'Helo'
    });
  }, [loading, getUserdataById, match]);

  const {
    text,
    year,
    policestation,
    crimeregisterno,
    dateofcrime,
    regdateofcrime,
    victimdetails,
    natureofcrime,
    sections,
    chargesheetdate,
    policeinvestigation,
    courtresults,
    financialsupport,
    twitter,
    facebook,
    linkedin,
    youtube,
    instagram
  } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    editUserdata(match.params.id, formData, history);
  };

  return (
    <Fragment>
      {userdata === null || loading ? (
        <Spinner />
      ) : userdata === null ? (
        <Spinner />
      ) : (
        <Fragment>
          <h1 className='large text-primary'>Create Your Profile</h1>
          <p className='lead'>
            <i className='fas fa-user' /> Let's add some information to your
            profile
          </p>
          <small>* = required field</small>
          <form className='form' onSubmit={e => onSubmit(e)}>
            <div className='form-group'>
              <input
                type='text'
                placeholder='Text'
                name='text'
                value={text}
                onChange={e => onChange(e)}
              />
              <small className='form-text'>
                Could be your own company or one you work for
              </small>
            </div>
            <div className='form-group'>
              <input
                type='text'
                placeholder='Year of Crime'
                name='year'
                value={year}
                onChange={e => onChange(e)}
              />
            </div>
            <div className='form-group'>
              <input
                type='text'
                placeholder='Name of Police Station'
                name='policestation'
                value={policestation}
                onChange={e => onChange(e)}
              />
            </div>
            <div className='form-group'>
              <input
                type='text'
                placeholder='Register No.'
                name='crimeregisterno'
                value={crimeregisterno}
                onChange={e => onChange(e)}
              />
            </div>
            <div className='form-group'>
              <input
                type='text'
                placeholder='Date When Crime Happened'
                name='dateofcrime'
                value={dateofcrime}
                onChange={e => onChange(e)}
              />
            </div>
            <div className='form-group'>
              <input
                type='text'
                placeholder='Date when FIR was Registered'
                name='regdateofcrime'
                value={regdateofcrime}
                onChange={e => onChange(e)}
              />
            </div>
            <div className='form-group'>
              <input
                type='text'
                placeholder='Details of Victim'
                name='victimdetails'
                value={victimdetails}
                onChange={e => onChange(e)}
              />
            </div>
            <div className='form-group'>
              <input
                type='text'
                placeholder='Nature of Crime e.g: Murder '
                name='natureofcrime'
                value={natureofcrime}
                onChange={e => onChange(e)}
              />
            </div>
            <div className='form-group'>
              <input
                type='text'
                placeholder='Penal Codes Applicable'
                name='sections'
                value={sections}
                onChange={e => onChange(e)}
              />
            </div>
            <div className='form-group'>
              <input
                type='text'
                placeholder='Date When Chargesheet was filed in the court'
                name='chargesheetdate'
                value={chargesheetdate}
                onChange={e => onChange(e)}
              />
            </div>
            <div className='form-group'>
              <input
                type='text'
                placeholder='Details from Police Investigation'
                name='policeinvestigation'
                value={policeinvestigation}
                onChange={e => onChange(e)}
              />
            </div>
            <div className='form-group'>
              <input
                type='text'
                placeholder='Court Results'
                name='courtresults'
                value={courtresults}
                onChange={e => onChange(e)}
              />
            </div>
            <div className='form-group'>
              <input
                type='text'
                placeholder='Financial Support to be Provided'
                name='financialsupport'
                value={financialsupport}
                onChange={e => onChange(e)}
              />
            </div>
            <div className='my-2'>
              <button
                onClick={() => toggleSocialInputs(!displaySocialInputs)}
                type='button'
                className='btn btn-light'
              >
                Add Social Network Links
              </button>
              <span>Optional</span>
            </div>

            {displaySocialInputs && (
              <Fragment>
                <div className='form-group social-input'>
                  <i className='fab fa-twitter fa-2x' />
                  <input
                    type='text'
                    placeholder='Twitter URL'
                    name='twitter'
                    value={twitter}
                    onChange={e => onChange(e)}
                  />
                </div>

                <div className='form-group social-input'>
                  <i className='fab fa-facebook fa-2x' />
                  <input
                    type='text'
                    placeholder='Facebook URL'
                    name='facebook'
                    value={facebook}
                    onChange={e => onChange(e)}
                  />
                </div>

                <div className='form-group social-input'>
                  <i className='fab fa-youtube fa-2x' />
                  <input
                    type='text'
                    placeholder='YouTube URL'
                    name='youtube'
                    value={youtube}
                    onChange={e => onChange(e)}
                  />
                </div>

                <div className='form-group social-input'>
                  <i className='fab fa-linkedin fa-2x' />
                  <input
                    type='text'
                    placeholder='Linkedin URL'
                    name='linkedin'
                    value={linkedin}
                    onChange={e => onChange(e)}
                  />
                </div>

                <div className='form-group social-input'>
                  <i className='fab fa-instagram fa-2x' />
                  <input
                    type='text'
                    placeholder='Instagram URL'
                    name='instagram'
                    value={instagram}
                    onChange={e => onChange(e)}
                  />
                </div>
              </Fragment>
            )}

            <input type='submit' className='btn btn-primary my-1' />
            <Link to='/dashboard' className='btn btn-light my-1'>
              Go Back
            </Link>
          </form>
        </Fragment>
      )}
    </Fragment>
  );
};

EditUserdataById.propTypes = {
  editUserdata: PropTypes.func.isRequired,
  getUserdataById: PropTypes.func.isRequired,
  userdata: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  userdata: state.userdata
});

export default connect(
  mapStateToProps,
  { editUserdata, getUserdataById }
)(withRouter(EditUserdataById));

// import React, { Fragment, useState, useEffect } from 'react';
// import { Link, withRouter } from 'react-router-dom';
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
// import { editUserdata, getUserdataById } from '../../actions/userdata';

// const EditUserdataById = ({
//   match,
//   getUserdataById,
//   history,
//   userdata: { userdata, loading },
//   editUserdata
// }) => {
//   const [formData, setFormData] = useState({
//     text: ''
//   });

//   useEffect(() => {
//     getUserdataById(match.params.id);

//     //Fill the form with Current VAlues
//     console.log(userdata);
//     setFormData({
//       text: loading || userdata.text ? '' : userdata.text
//     });
//   }, [match, getUserdataById, userdata, loading]);

//   const { text } = formData;

//   const onChange = e =>
//     setFormData({ ...formData, [e.target.name]: e.target.value });

//   const onSubmit = e => {
//     e.preventDefault();
//     editUserdata(formData, history, true);
//   };
//   return (
//     <Fragment>
//       <form className='form' onSubmit={e => onSubmit(e)}>
//         <div className='form-group'>
//           <input
//             type='text'
//             placeholder='Text'
//             name='text'
//             value={text}
//             onChange={e => onChange(e)}
//           />
//           <small className='form-text'>
//             Could be your own company or one you work for
//           </small>
//         </div>
//         <input type='submit' className='btn btn-primary my-1' />
//         <Link to='/usersdata' className='btn btn-light my-1'>
//           Go Back
//         </Link>
//       </form>
//     </Fragment>
//   );
// };

// EditUserdataById.propTypes = {
//   editUserdata: PropTypes.func.isRequired,
//   getUserdataById: PropTypes.func.isRequired,
//   userdata: PropTypes.object.isRequired
// };

// const mapStateToProps = state => ({
//   userdata: state.userdata
// });

// export default connect(
//   mapStateToProps,
//   { editUserdata, getUserdataById }
// )(withRouter(EditUserdataById));
