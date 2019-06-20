import React, { Fragment, useState, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import Spinner from '../layout/Spinner';
import { connect } from 'react-redux';
import { editUserdata, getUserdataById } from '../../actions/userdata';
import Select from 'react-select';
import { ipcOptions, sectionsopts, options } from './ipcdata';
import makeAnimated from 'react-select/animated';

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
    firstbenefitbypolice: '',
    firstbenefitbycommis: '',
    firstbenefitbycollector: '',
    firstbenefitbypolicecomment: '',
    firstbenefitbycommcomment: '',
    firstbenefitbycollectorcomment: '',
    secondbenefitbypolice: '',
    secondbenefitbycommis: '',
    secondbenefitbycollector: '',
    secondbenefitbypolicecomment: '',
    secondbenefitbycommcomment: '',
    secondbenefitbycollectorcomment: '',
    sections: '',
    chargesheetdate: '',
    policeinvestigation: '',
    courtresults: '',
    financialsupport: '',
    dateofcourtorder: '',
    twitter: '',
    facebook: '',
    linkedin: '',
    youtube: '',
    instagram: '',
    disabledata: false,
    closecase: false,
    docImage: '',
    doccImage: '',
    victimone: '',
    victimtwo: '',
    victimthree: '',
    victimfour: '',
    victimfive: '',
    accusedone: '',
    accusedtwo: '',
    accusedthree: '',
    accusedfour: '',
    accusedfive: ''
  });
  const [typeofatrocity, setTypeofatrocity] = useState(null);
  const [ipcapplied, setIpc] = useState(null);
  const [sectionsapplied, setSections] = useState(null);

  var formDataa = new FormData();

  const animatedComponents = makeAnimated();
  const [displaySocialInputs, toggleSocialInputs] = useState(false);
  const [displayVictim, toggledisplayVictim] = useState(false);
  const [displayAccused, toggledisplayAccused] = useState(false);

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
      firstbenefitbypolice:
        loading || !userdata.firstbenefitbypolice
          ? ''
          : userdata.firstbenefitbypolice,
      firstbenefitbycommis:
        loading || !userdata.firstbenefitbycommis
          ? ''
          : userdata.firstbenefitbycommis,
      firstbenefitbycollector:
        loading || !userdata.firstbenefitbycollector
          ? ''
          : userdata.firstbenefitbycollector,
      firstbenefitbypolicecomment:
        loading || !userdata.firstbenefitbypolicecomment
          ? ''
          : userdata.firstbenefitbypolicecomment,
      firstbenefitbycommcomment:
        loading || !userdata.firstbenefitbycommcomment
          ? ''
          : userdata.firstbenefitbycommcomment,
      firstbenefitbycollectorcomment:
        loading || !userdata.firstbenefitbycollectorcomment
          ? ''
          : userdata.firstbenefitbycollectorcomment,
      secondbenefitbypolice:
        loading || !userdata.secondbenefitbypolice
          ? ''
          : userdata.secondbenefitbypolice,
      secondbenefitbycommis:
        loading || !userdata.secondbenefitbycommis
          ? ''
          : userdata.secondbenefitbycommis,
      secondbenefitbycollector:
        loading || !userdata.secondbenefitbycollector
          ? ''
          : userdata.secondbenefitbycollector,
      secondbenefitbypolicecomment:
        loading || !userdata.secondbenefitbypolicecomment
          ? ''
          : userdata.secondbenefitbypolicecomment,
      secondbenefitbycommcomment:
        loading || !userdata.secondbenefitbycommcomment
          ? ''
          : userdata.secondbenefitbycommcomment,
      secondbenefitbycollectorcomment:
        loading || !userdata.secondbenefitbycollectorcomment
          ? ''
          : userdata.secondbenefitbycollectorcomment,
      natureofcrime:
        loading || !userdata.natureofcrime ? '' : userdata.natureofcrime,
      sections: loading || !userdata.sections ? '' : userdata.sections,
      chargesheetdate:
        loading || !userdata.chargesheetdate ? '' : userdata.chargesheetdate,
      dateofcourtorder:
        loading || !userdata.dateofcourtorder ? '' : userdata.dateofcourtorder,
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
      instagram: loading || !userdata.instagram ? '' : userdata.instagram,
      disabledata:
        loading || !userdata.disabledata ? false : userdata.disabledata,
      closecase: loading || !userdata.closecase ? false : userdata.closecase,

      docImage: loading || !userdata.docImage ? '' : userdata.docImage,
      doccImage: loading || !userdata.doccImage ? '' : userdata.doccImage,
      victimone: loading || !userdata.victimone ? '' : userdata.victimone,
      victimtwo: loading || !userdata.victimtwo ? '' : userdata.victimtwo,
      victimthree: loading || !userdata.victimthree ? '' : userdata.victimthree,
      victimfour: loading || !userdata.victimfour ? '' : userdata.victimfour,
      victimfive: loading || !userdata.victimfive ? '' : userdata.victimfive,
      accusedone: loading || !userdata.accusedone ? '' : userdata.accusedone,
      accusedtwo: loading || !userdata.accusedtwo ? '' : userdata.accusedtwo,
      accusedthree:
        loading || !userdata.accusedthree ? '' : userdata.accusedthree,
      accusedfour: loading || !userdata.accusedfour ? '' : userdata.accusedfour,
      accusedfive: loading || !userdata.accusedfive ? '' : userdata.accusedfive
      //   text: 'Helo'
    });
    setTypeofatrocity(
      loading || !userdata.typeofatrocity
        ? null
        : JSON.parse(userdata.typeofatrocity)
    );
    setIpc(
      loading || !userdata.ipcapplied ? null : JSON.parse(userdata.ipcapplied)
    );
    setSections(
      loading || !userdata.sectionsapplied
        ? null
        : JSON.parse(userdata.sectionsapplied)
    );
  }, [loading, getUserdataById, match]);

  const handleChange = typeofatrocity => {
    setTypeofatrocity(typeofatrocity);
  };
  const handleIpc = ipcapplied => {
    setIpc(ipcapplied);
  };
  const handleSections = sectionsapplied => {
    setSections(sectionsapplied);
  };

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
    firstbenefitbypolice,
    firstbenefitbycommis,
    firstbenefitbycollector,
    firstbenefitbypolicecomment,
    firstbenefitbycommcomment,
    firstbenefitbycollectorcomment,
    secondbenefitbypolice,
    secondbenefitbycommis,
    secondbenefitbycollector,
    secondbenefitbypolicecomment,
    secondbenefitbycommcomment,
    secondbenefitbycollectorcomment,
    policeinvestigation,
    courtresults,
    financialsupport,
    dateofcourtorder,
    twitter,
    facebook,
    linkedin,
    youtube,
    instagram,
    disabledata,
    closecase,
    docImage,
    doccImage,
    victimone,
    victimtwo,
    victimthree,
    victimfour,
    victimfive,
    accusedone,
    accusedtwo,
    accusedthree,
    accusedfour,
    accusedfive
  } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    formDataa.append('typeofatrocity', JSON.stringify(typeofatrocity));
    formDataa.append('ipcapplied', JSON.stringify(ipcapplied));
    formDataa.append('sectionsapplied', JSON.stringify(sectionsapplied));
    formDataa.append('text', formData.text);
    formDataa.append('year', year);
    formDataa.append('policestation', policestation);
    formDataa.append('crimeregisterno', crimeregisterno);
    formDataa.append('dateofcrime', dateofcrime);
    formDataa.append('regdateofcrime', regdateofcrime);
    formDataa.append('victimdetails', victimdetails);
    formDataa.append('natureofcrime', natureofcrime);
    formDataa.append('firstbenefitbypolice', firstbenefitbypolice);
    formDataa.append('firstbenefitbycommis', firstbenefitbycommis);
    formDataa.append('firstbenefitbycollector', firstbenefitbycollector);
    formDataa.append(
      'firstbenefitbypolicecomment',
      firstbenefitbypolicecomment
    );
    formDataa.append('firstbenefitbycommcomment', firstbenefitbycommcomment);
    formDataa.append(
      'firstbenefitbycollectorcomment',
      firstbenefitbycollectorcomment
    );
    formDataa.append('secondbenefitbypolice', secondbenefitbypolice);
    formDataa.append('secondbenefitbycommis', secondbenefitbycommis);
    formDataa.append('secondbenefitbycollector', secondbenefitbycollector);
    formDataa.append(
      'secondbenefitbypolicecomment',
      secondbenefitbypolicecomment
    );
    formDataa.append('secondbenefitbycommcomment', secondbenefitbycommcomment);
    formDataa.append(
      'secondbenefitbycollectorcomment',
      secondbenefitbycollectorcomment
    );
    formDataa.append('sections', sections);
    formDataa.append('chargesheetdate', chargesheetdate);
    formDataa.append('policeinvestigation', policeinvestigation);
    formDataa.append('dateofcourtorder', dateofcourtorder);
    formDataa.append('courtresults', courtresults);
    formDataa.append('financialsupport', financialsupport);
    formDataa.append('twitter', twitter);
    formDataa.append('facebook', facebook);
    formDataa.append('linkedin', linkedin);
    formDataa.append('youtube', youtube);
    formDataa.append('instagram', instagram);
    formDataa.append('disabledata', disabledata);
    formDataa.append('closecase', closecase);
    formDataa.append('docImage', docImage);
    formDataa.append('doccImage', doccImage);
    formDataa.append('victimone', victimone);
    formDataa.append('victimtwo', victimtwo);
    formDataa.append('victimthree', victimthree);
    formDataa.append('victimfour', victimfour);
    formDataa.append('victimfive', victimfive);
    formDataa.append('accusedone', accusedone);
    formDataa.append('accusedtwo', accusedtwo);
    formDataa.append('accusedthree', accusedthree);
    formDataa.append('accusedfour', accusedfour);
    formDataa.append('accusedfive', accusedfive);
    editUserdata(match.params.id, formDataa, history);
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
          <form
            className='form'
            onSubmit={e => onSubmit(e)}
            encType='multipart/form-data'
            method='POST'
          >
            <div className='form-group'>
              Serial No.
              <input
                type='text'
                placeholder='Serial No.'
                name='text'
                value={text}
                onChange={e => onChange(e)}
              />
              <small className='form-text'>
                Could be the defined format of serial no
              </small>
            </div>
            <div className='form-group'>
              Year of Crime
              <input
                type='date'
                placeholder='Year of Crime'
                name='year'
                value={year}
                onChange={e => onChange(e)}
              />
            </div>
            <div className='form-group'>
              Type of Crime
              <Select
                closeMenuOnSelect={false}
                components={animatedComponents}
                options={options}
                name='typeofatrocity'
                value={typeofatrocity}
                isMulti
                isSearchable
                onChange={handleChange}
              />
            </div>
            <div className='form-group'>
              Select IPC
              <Select
                closeMenuOnSelect={false}
                components={animatedComponents}
                options={ipcOptions}
                name='ipcapplied'
                value={ipcapplied}
                isMulti
                isSearchable
                onChange={handleIpc}
              />
            </div>
            <div className='form-group'>
              Select IPC
              <Select
                closeMenuOnSelect={false}
                components={animatedComponents}
                options={sectionsopts}
                name='sectionsapplied'
                value={sectionsapplied}
                isMulti
                isSearchable
                onChange={handleSections}
              />
            </div>
            <div className='form-group'>
              Name of Police Station
              <select
                name='policestation'
                value={policestation}
                onChange={e => onChange(e)}
              >
                <option value='Dhule City'>Dhule City </option>
                <option value='Aazadnagar'>Aazadnagar</option>
                <option value='Chalisgaon Road'>Chalisgaon Road</option>
                <option value='Mohadi Upnagar'>Mohadi Upnagar</option>
                <option value='Deopur Police Station'>
                  Deopur Police Station
                </option>
                <option value='West Deopur'>West Deopur</option>
                <option value='Dhule Taluka'>Dhule Taluka</option>
                <option value='Songir'>Songir</option>
                <option value='Sakri'>Sakri</option>
                <option value='Pimplner'>Pimplner</option>
                <option value='Nijampur'>Nijampur</option>
                <option value='Shindkheda'>Shindkheda</option>
                <option value='Nardana'>Nardana</option>
                <option value='Dondaicha'>Dondaicha</option>
                <option value='Shirpur Taluka'>Shirpur Taluka</option>
                <option value='Shirpur City'>Shirpur City</option>
                <option value='Thalner'>Thalner</option>
              </select>
            </div>
            <div className='form-group'>
              Register No.
              <input
                type='text'
                placeholder='Register No.'
                name='crimeregisterno'
                value={crimeregisterno}
                onChange={e => onChange(e)}
              />
            </div>
            <div className='form-group'>
              Date When Crime Happened
              <input
                type='date'
                placeholder='Date When Crime Happened'
                name='dateofcrime'
                value={dateofcrime}
                onChange={e => onChange(e)}
              />
            </div>
            <div className='image'>
              <img
                src={'http://localhost:5000/' + docImage}
                alt='new'
                height='400'
                width='400'
              />
            </div>
            <div className='image'>
              <img
                src={'http://localhost:5000/' + doccImage}
                alt='new'
                height='400'
              />
            </div>
            <div className='my-2'>
              <button
                onClick={() => toggledisplayVictim(!displayVictim)}
                type='button'
                className='btn btn-light'
              >
                Add Victim's Caste Certificate
              </button>
              <span>-> If you want to change the uploaded files</span>
            </div>
            {displayVictim && (
              <Fragment>
                <h3>Add Victim's Details</h3>
                <div className='form-group'>
                  Upload first Victim's Caste Certificate File <br />
                  <input
                    type='file'
                    name='victimone'
                    onChange={e => {
                      const vall = e.target.files[0];
                      setFormData(prevState => {
                        return { ...prevState, victimone: vall };
                      });
                    }}
                  />
                </div>
                <div className='form-group'>
                  Upload Second Victim's Caste Certificate File <br />
                  <input
                    type='file'
                    name='victimtwo'
                    onChange={e => {
                      const vall = e.target.files[0];
                      setFormData(prevState => {
                        return { ...prevState, victimtwo: vall };
                      });
                    }}
                  />
                </div>
                <div className='form-group'>
                  Upload third Victim's Caste Certificate File <br />
                  <input
                    type='file'
                    name='victimthree'
                    onChange={e => {
                      const vall = e.target.files[0];
                      setFormData(prevState => {
                        return { ...prevState, victimthree: vall };
                      });
                    }}
                  />
                </div>
                <div className='form-group'>
                  Upload fourth Victim's Caste Certificate File <br />
                  <input
                    type='file'
                    name='victimfour'
                    onChange={e => {
                      const vall = e.target.files[0];
                      setFormData(prevState => {
                        return { ...prevState, victimfour: vall };
                      });
                    }}
                  />
                </div>
                <div className='form-group'>
                  Upload fifth Victim's Caste Certificate File <br />
                  <input
                    type='file'
                    name='victimfive'
                    onChange={e => {
                      const vall = e.target.files[0];
                      setFormData(prevState => {
                        return { ...prevState, victimfive: vall };
                      });
                    }}
                  />
                </div>
              </Fragment>
            )}

            <div className='my-2'>
              <button
                onClick={() => toggledisplayAccused(!displayAccused)}
                type='button'
                className='btn btn-light'
              >
                Add Accused Person's Caste Certificate
              </button>
              <span>-> If you want to change the uploaded files</span>
            </div>

            {displayAccused && (
              <Fragment>
                <h3>Add Accused Person's Details</h3>

                <div
                  className='form-group'
                  style={{
                    backgroundColor: 'green',
                    color: 'white',
                    padding: '10px'
                  }}
                >
                  Upload first Accused Person's Caste Certificate File <br />
                  <input
                    type='file'
                    name='accusedone'
                    onChange={e => {
                      const vall = e.target.files[0];
                      setFormData(prevState => {
                        return { ...prevState, accusedone: vall };
                      });
                    }}
                  />
                </div>
                <div className='form-group'>
                  Upload Second Accused Person's Caste Certificate File <br />
                  <input
                    type='file'
                    name='accusedtwo'
                    onChange={e => {
                      const vall = e.target.files[0];
                      setFormData(prevState => {
                        return { ...prevState, accusedtwo: vall };
                      });
                    }}
                  />
                </div>
                <div className='form-group'>
                  Upload third Accused Person's Caste Certificate File <br />
                  <input
                    type='file'
                    name='accusedthree'
                    onChange={e => {
                      const vall = e.target.files[0];
                      setFormData(prevState => {
                        return { ...prevState, accusedthree: vall };
                      });
                    }}
                  />
                </div>
                <div className='form-group'>
                  Upload fourth Accused Person's Caste Certificate File <br />
                  <input
                    type='file'
                    name='accusedfour'
                    onChange={e => {
                      const vall = e.target.files[0];
                      setFormData(prevState => {
                        return { ...prevState, accusedfour: vall };
                      });
                    }}
                  />
                </div>
                <div className='form-group'>
                  Upload fifth Accused Person's Caste Certificate File <br />
                  <input
                    type='file'
                    name='accusedfive'
                    onChange={e => {
                      const vall = e.target.files[0];
                      setFormData(prevState => {
                        return { ...prevState, accusedfive: vall };
                      });
                    }}
                  />
                </div>
              </Fragment>
            )}
            <div className='form-group'>
              Upload FIR File
              <input
                type='file'
                name='docImage'
                onChange={e => {
                  const vall = e.target.files[0];
                  setFormData(prevState => {
                    return { ...prevState, docImage: vall };
                  });
                }}
              />
              Upload 2ndFIR File
              <input
                type='file'
                name='doccImage'
                onChange={e => {
                  const vall = e.target.files[0];
                  setFormData(prevState => {
                    return { ...prevState, doccImage: vall };
                  });
                }}
              />
            </div>

            <div className='form-group'>
              Date when FIR was Registered
              <input
                type='date'
                placeholder='Date when FIR was Registered'
                name='regdateofcrime'
                value={regdateofcrime}
                onChange={e => onChange(e)}
              />
            </div>
            <div className='form-group'>
              Details of Victim
              <input
                type='text'
                placeholder='Details of Victim'
                name='victimdetails'
                value={victimdetails}
                onChange={e => onChange(e)}
              />
            </div>
            <div className='form-group'>
              Nature of Crime e.g: Murder
              <textarea
                rows='4'
                cols='2'
                type='text'
                placeholder='Nature of Crime e.g: Murder '
                name='natureofcrime'
                value={natureofcrime}
                onChange={e => onChange(e)}
              />
            </div>
            <div className='form-group'>
              First Benefit Recommendation by Police
              <input
                type='radio'
                name='firstbenefitbypolice'
                checked={firstbenefitbypolice === 'yes'}
                value='yes'
                onChange={e => onChange(e)}
              />{' '}
              Yes
              <input
                type='radio'
                name='firstbenefitbypolice'
                checked={firstbenefitbypolice === 'no'}
                value='no'
                onChange={e => onChange(e)}
              />{' '}
              No
            </div>
            <div className='form-group'>
              Comment on First benefit Recommendation by Police
              <input
                type='text'
                placeholder='Give the Reason for Recommendation'
                name='firstbenefitbypolicecomment'
                value={firstbenefitbypolicecomment}
                onChange={e => onChange(e)}
              />
            </div>
            <div className='form-group'>
              First Benefit Recommendation by Assistant Commisioner
              <input
                type='radio'
                name='firstbenefitbycommis'
                checked={firstbenefitbycommis === 'yes'}
                value='yes'
                onChange={e => onChange(e)}
              />{' '}
              Yes
              <input
                type='radio'
                name='firstbenefitbycommis'
                checked={firstbenefitbycommis === 'no'}
                value='no'
                onChange={e => onChange(e)}
              />{' '}
              No
            </div>
            <div className='form-group'>
              Comment on First benefit Recommendation by Asst. Commisioner
              <input
                type='text'
                placeholder='Give the Reason for Recommendation'
                name='firstbenefitbycommcomment'
                value={firstbenefitbycommcomment}
                onChange={e => onChange(e)}
              />
            </div>
            <div className='form-group'>
              Decision for distribution of first Benefit District Collector
              <input
                type='radio'
                name='firstbenefitbycollector'
                checked={firstbenefitbycollector === 'yes'}
                value='yes'
                onChange={e => onChange(e)}
              />{' '}
              Yes
              <input
                type='radio'
                name='firstbenefitbycollector'
                checked={firstbenefitbycollector === 'no'}
                value='no'
                onChange={e => onChange(e)}
              />{' '}
              No
            </div>

            <div className='form-group'>
              Comment on First benefit Decision by District Collector
              <input
                type='text'
                placeholder='Give the Reason for Recommendation'
                name='firstbenefitbycollectorcomment'
                value={firstbenefitbycollectorcomment}
                onChange={e => onChange(e)}
              />
            </div>
            <div className='form-group'>
              Applicable Penal Codes
              <input
                type='text'
                placeholder='Penal Codes Applicable'
                name='sections'
                value={sections}
                onChange={e => onChange(e)}
              />
            </div>
            <div className='form-group'>
              Date of Court Order
              <input
                type='date'
                placeholder='Date of Court Order'
                name='dateofcourtorder'
                value={dateofcourtorder}
                onChange={e => onChange(e)}
              />
            </div>
            <div className='form-group'>
              Date When Chargesheet was filed in the court
              <input
                type='date'
                placeholder='Date When Chargesheet was filed in the court'
                name='chargesheetdate'
                value={chargesheetdate}
                onChange={e => onChange(e)}
              />
            </div>
            <div className='form-group'>
              Second Benefit Recommendation by Police
              <input
                type='radio'
                name='secondbenefitbypolice'
                checked={secondbenefitbypolice === 'yes'}
                value='yes'
                onChange={e => onChange(e)}
              />{' '}
              Yes
              <input
                type='radio'
                name='secondbenefitbypolice'
                checked={secondbenefitbypolice === 'no'}
                value='no'
                onChange={e => onChange(e)}
              />{' '}
              No
            </div>
            <div className='form-group'>
              Comment on Second benefit Recommendation by Police
              <input
                type='text'
                placeholder='Give the Reason for Recommendation'
                name='secondbenefitbypolicecomment'
                value={secondbenefitbypolicecomment}
                onChange={e => onChange(e)}
              />
            </div>
            <div className='form-group'>
              Second Benefit Recommendation by Assistant Commisioner
              <input
                type='radio'
                name='secondbenefitbycommis'
                checked={secondbenefitbycommis === 'yes'}
                value='yes'
                onChange={e => onChange(e)}
              />{' '}
              Yes
              <input
                type='radio'
                name='secondbenefitbycommis'
                checked={secondbenefitbycommis === 'no'}
                value='no'
                onChange={e => onChange(e)}
              />{' '}
              No
            </div>
            <div className='form-group'>
              Comment on Second benefit Recommendation by Asst. Commisioner
              <input
                type='text'
                placeholder='Give the Reason for Recommendation'
                name='secondbenefitbycommcomment'
                value={secondbenefitbycommcomment}
                onChange={e => onChange(e)}
              />
            </div>
            <div className='form-group'>
              Decision for distribution of second Benefit District Collector
              <input
                type='radio'
                name='secondbenefitbycollector'
                checked={secondbenefitbycollector === 'yes'}
                value='yes'
                onChange={e => onChange(e)}
              />{' '}
              Yes
              <input
                type='radio'
                name='secondbenefitbycollector'
                checked={secondbenefitbycollector === 'no'}
                value='no'
                onChange={e => onChange(e)}
              />{' '}
              No
            </div>

            <div className='form-group'>
              Comment on Second benefit Decision by District Collector
              <input
                type='text'
                placeholder='Give the Reason for Recommendation'
                name='secondbenefitbycollectorcomment'
                value={secondbenefitbycollectorcomment}
                onChange={e => onChange(e)}
              />
            </div>
            <div className='form-group'>
              Details from Police Investigation
              <textarea
                type='text'
                rows='4'
                placeholder='Details from Police Investigation'
                name='policeinvestigation'
                value={policeinvestigation}
                onChange={e => onChange(e)}
              />
            </div>
            <div className='form-group'>
              Court Results
              <textarea
                rows='4'
                type='text'
                placeholder='Court Results'
                name='courtresults'
                value={courtresults}
                onChange={e => onChange(e)}
              />
            </div>
            <div className='form-group'>
              Financial Support to be Provided
              <textarea
                rows='4'
                type='text'
                placeholder='Financial Support to be Provided'
                name='financialsupport'
                value={financialsupport}
                onChange={e => onChange(e)}
              />
            </div>
            {!disabledata && <Fragment>Do You want to close the Case</Fragment>}
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
