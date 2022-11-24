import * as React from "react";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { useLocation, Link } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';


const Breadcrumb = () => {
  // const { history, router } = props;
  const location = useLocation()
 

  const pathname = location?.pathname ?? '';
  // console.log(location)
  const pathnames = pathname?.split("/")?.filter((x) => x)?? [];

  return (
    <div className="container breadcrumb py-2">
      <Breadcrumbs separator={ <NavigateNextIcon fontSize="small" /> } aria-label="breadcrumb" className="breadcrumb">
        {pathnames?.length ? (<Link to='/' > <HomeIcon /> </Link>) : ( <Typography className="breadcrumb"> <HomeIcon/> </Typography> )}    
        {pathnames.map((name, index) => {
          const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
          const isLast = index === pathnames.length - 1;
          return isLast ? (<Typography className="breadcrumb" key={name}> {name} </Typography>) : (<Link key={name} to={routeTo}> {name} </Link>);
        })}
      </Breadcrumbs>
    </div>
  );
};

export default Breadcrumb;
