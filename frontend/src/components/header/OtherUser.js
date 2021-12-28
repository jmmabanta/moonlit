import { Avatar, Typography } from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';
import getApiRoute from '../utils/getApiRoute';

/**
 * Displays info of the shared portfolio
 * @typedef OtherUserProps
 * @property {str} otherUserID The User ID of the other person's portfolio.
 * @param {OtherUserProps} props
 * @returns Component that displays information regarding shared portfolio.
 */
const OtherUser = (props) => {
  const [otherUser, setOtherUser] = useState({});

  const getOtherUser = () => {
    let otherUserData = new FormData();
    otherUserData.set('user_id', props.otherUserID);
    axios
      .post(getApiRoute('/userinfo'), otherUserData)
      .then((res) => {
        setOtherUser(res.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    if (props.otherUserID) getOtherUser();
    // eslint-disable-next-line
  }, []);

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        flexDirection: 'column'
      }}
    >
      {Object.keys(otherUser).length !== 0 && (
        <>
          <Avatar
            src={otherUser['picture'].slice(0, -6)}
            style={{ marginBottom: '1vh' }}
          />
          <Typography>Viewing {otherUser['name']}'s Portfolio</Typography>
        </>
      )}
    </div>
  );
};

export default OtherUser;
