import React, { Fragment, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getDeousersdata } from '../../actions/deouserdata';
import Spinner from '../layout/Spinner';
import DeouserdataItem from '../../components/deousersdata/Deouserdataitem';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import './table.css';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1)
  },
  input: {
    display: 'none'
  }
}));

const Deousersdata = ({
  getDeousersdata,
  deouserdata: { deousersdata, loading }
}) => {
  useEffect(() => {
    getDeousersdata();
  }, [getDeousersdata]);

  const myStyle = {
    width: '30%',
    padding: '12px 20px',
    margin: '8px 2px',
    display: 'inline-block',
    border: '1px solid #ccc',
    borderRadius: '4px',
    boxSizing: 'borderBox'
  };

  const [formData, setFormData] = useState({
    search: '',
    courtresults: '',
    crimeregisterno: '',
    victimdetails: '',
    dateofcourtorder: '',
    sectionsapplied: '',
    ipcapplied: '',
    typeofatrocity: '',
    policestation: '',
    approval: 'no'
  });

  const {
    search,
    courtresults,
    crimeregisterno,
    victimdetails,
    dateofcourtorder,
    sectionsapplied,
    ipcapplied,
    typeofatrocity,
    policestation,
    approval
  } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const filtereddata = deousersdata.filter(deousersdata => {
    return (
      deousersdata.text.toLowerCase().indexOf(search.toLowerCase()) !== -1 &&
      deousersdata.approve.toLowerCase().indexOf(approval.toLowerCase()) !==
        -1 &&
      deousersdata.courtresults
        .toLowerCase()
        .indexOf(courtresults.toLowerCase()) !== -1 &&
      deousersdata.crimeregisterno
        .toLowerCase()
        .indexOf(crimeregisterno.toLowerCase()) !== -1 &&
      deousersdata.victimdetails
        .toLowerCase()
        .indexOf(victimdetails.toLowerCase()) !== -1 &&
      deousersdata.dateofcourtorder
        .toLowerCase()
        .indexOf(dateofcourtorder.toLowerCase()) !== -1 &&
      deousersdata.sectionsapplied
        .toLowerCase()
        .indexOf(sectionsapplied.toLowerCase()) !== -1 &&
      deousersdata.ipcapplied
        .toLowerCase()
        .indexOf(ipcapplied.toLowerCase()) !== -1 &&
      deousersdata.typeofatrocity
        .toLowerCase()
        .indexOf(typeofatrocity.toLowerCase()) !== -1 &&
      deousersdata.policestation
        .toLowerCase()
        .indexOf(policestation.toLowerCase()) !== -1
    );
  });

  const classes = useStyles();

  const [searchbox, displaSearchbox] = useState(false);

  return loading ? (
    <Spinner />
  ) : (
    <div style={{ margin: '100px 50px' }}>
      {searchbox && (
        <div>
          <input
            style={myStyle}
            type='text'
            placeholder='Search by serial..'
            name='search'
            value={search}
            onChange={e => onChange(e)}
          />
          <input
            style={myStyle}
            type='text'
            placeholder='Search by Court Results..'
            name='courtresults'
            value={courtresults}
            onChange={e => onChange(e)}
          />
          <input
            style={myStyle}
            type='text'
            placeholder='Search by Register No..'
            name='crimeregisterno'
            value={crimeregisterno}
            onChange={e => onChange(e)}
          />
          <input
            style={myStyle}
            type='text'
            placeholder='Search by Victim..'
            name='victimdetails'
            value={victimdetails}
            onChange={e => onChange(e)}
          />
          <input
            style={myStyle}
            type='text'
            placeholder='Search by Date of Court Order..'
            name='dateofcourtorder'
            value={dateofcourtorder}
            onChange={e => onChange(e)}
          />
          <input
            style={myStyle}
            type='text'
            placeholder='Search by Sections Applied..'
            name='sectionsapplied'
            value={sectionsapplied}
            onChange={e => onChange(e)}
          />
          <input
            style={myStyle}
            type='text'
            placeholder='Search by IPC Sections..'
            name='ipcapplied'
            value={ipcapplied}
            onChange={e => onChange(e)}
          />
          <input
            style={myStyle}
            type='text'
            placeholder='Search by Type of Atrocity..'
            name='typeofatrocity'
            value={typeofatrocity}
            onChange={e => onChange(e)}
          />
          <input
            style={myStyle}
            type='text'
            placeholder='Search by Police Station..'
            name='policestation'
            value={policestation}
            onChange={e => onChange(e)}
          />
        </div>
      )}
      <Link to='create-deouserdata' style={{ marginBottom: '20px' }}>
        <Button variant='contained' color='primary' className={classes.button}>
          Create New Case
        </Button>
      </Link>
      <Button
        variant='contained'
        color='primary'
        className={classes.button}
        onClick={e => displaSearchbox(!searchbox)}
      >
        Search
      </Button>

      <br />
      <div className='form-group'>
        Select Type : Approved/Non Approved Cases{' '}
        <select name='approval' value={approval} onChange={e => onChange(e)}>
          <option value='yes'>Approved Cases</option>
          <option value='no'>Non Approved Cases</option>
          <option value=''>All Cases</option>
        </select>
      </div>
      <div className='userdata'>
        <table className='fl-table'>
          <thead>
            <tr>
              <th>Serial No.</th>
              <th>YEAR</th>
              <th>POLICE STATION</th>
              <th>DATE OF CRIME</th>
              <th>FIR No.</th>
              <th>TYPE OF CRIME </th>
              <th>IPC </th>
              <th>Sections </th>
              <th>Other Sections </th>
              <th>Button </th>
            </tr>
          </thead>
          <tbody>
            {filtereddata.length > 0 ? (
              filtereddata.map(deouserdata => (
                <DeouserdataItem
                  key={deouserdata._id}
                  deouserdata={deouserdata}
                />
              ))
            ) : (
              <tr>
                <td>No FIR Data Found</td>
                <td>No FIR Data Found</td>
                <td>No FIR Data Found</td>
                <td>No FIR Data Found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

Deousersdata.propTypes = {
  getDeousersdata: PropTypes.func.isRequired,
  deouserdata: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  deouserdata: state.deouserdata
});

export default connect(
  mapStateToProps,
  { getDeousersdata }
)(Deousersdata);
