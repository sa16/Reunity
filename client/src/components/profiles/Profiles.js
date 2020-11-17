import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import ProfileItem from './ProfileItem';
import { getProfiles } from '../../actions/profile';
import { getRequests, getRelations } from '../../actions/users';

const Profiles = ({ getProfiles, getRequests, getRelations, profile: { profiles, loading }, users: { requests, relations } }) => {
  useEffect(() => {
    getProfiles();
  }, [getProfiles]);

  useEffect(() => {
    getRelations();
  }, [getRelations]);

  useEffect(() => {
    getRequests();
  }, [getRequests]);

  return (
    <Fragment>
      {loading ? (
        <Spinner />
      ) : (
        <Fragment>
          <h1 className='large text-primary'>Relations</h1>
          <p className='lead'>
            <i className='fab fa-connectdevelop' /> Connect with
            your friends and family!
          </p>
          <h2 style={{ marginBottom: 50 }}className='medium text-primary'>Relation Requests</h2>
          <div className='profiles'>
            {requests.length > 0 ? (
              requests.map(re => (
                <ProfileItem key={re._id} request={re} />
              ))
            ) : (
              <h4>No relation requests</h4>
            )}
          </div>
          <h2 className='medium text-primary'>All Relations</h2>
          <div className='profiles'>
            {relations.length > 0 ? (
              relations.map(r => (
                <ProfileItem key={r._id} relation={r} />
              ))
            ) : (
              <h4>No relations</h4>
            )}
          </div>

          <h2 className='medium text-primary'>All Reunity Users</h2>
          <div className='profiles'>
            {profiles.length > 0 ? (
              profiles.map(profile => (
                <ProfileItem key={profile._id} profile={profile} />
              ))
            ) : (
              <h4>No profiles found</h4>
            )}
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

Profiles.propTypes = {
  getProfiles: PropTypes.func.isRequired,
  getRequests: PropTypes.func.isRequired,
  getRelations: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  users: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  profile: state.profile,
  users: state.users
});

export default connect(
  mapStateToProps,
  { getProfiles, getRequests, getRelations }
)(Profiles);
