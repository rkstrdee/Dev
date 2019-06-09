import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const UserdataTop = ({
  userdata: {
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
    _id
  }
}) => {
  return (
    <div>
      <h1>TEXT : {text}</h1>
      <h4>YEAR : {year}</h4>
      <h4>POLICE STATION : {policestation}</h4>
      <h4>CRIME REGISTER NO : {crimeregisterno}</h4>
      <h4>DATE OF CRIME : {dateofcrime}</h4>
      <h4>REGISTRATION DATE OF CRIME : {regdateofcrime}</h4>
      <h4>VICTIM DETAILS : {victimdetails}</h4>
      <h4>NATURE OF CRIME : {natureofcrime}</h4>
      <h4>SECTIONS / PENAL CODES : {sections}</h4>
      <h4>CHARGE SHEET DATE : {chargesheetdate}</h4>
      <h4>POLICE INVESTIGATION : {policeinvestigation}</h4>
      <h4>COURT RESULTS : {courtresults}</h4>
      <h4>FINANCIAL SUPPORT : {financialsupport}</h4>

      <Link to={`/edit-userdata/${_id}`} className='btn btn-primary'>
        Edit Userdata
      </Link>
      <Link to='/usersdata' className='btn btn-danger'>
        Delete
      </Link>
      <Link to='/usersdata' className='btn btn-primary'>
        Go Back
      </Link>
    </div>
  );
};

UserdataTop.propTypes = {};

export default UserdataTop;