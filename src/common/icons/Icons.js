import React from "react";
import InfoIcon from "@material-ui/icons/Info";
// import ViewModuleIcon from '@material-ui/icons/ViewModule';
// import ListIcon from '@material-ui/icons/List';
// import HistoryIcon from '@material-ui/icons/History';
// import StarIcon from '@material-ui/icons/Star';
// import PersonIcon from '@material-ui/icons/Person';
// import ContactMailIcon from '@material-ui/icons/ContactMail';

const Info = (props) => {
  const { children, ...rest } = props;

  return <InfoIcon id="icon" className={`mui-menu`} {...rest} />;
};
export default Info;
