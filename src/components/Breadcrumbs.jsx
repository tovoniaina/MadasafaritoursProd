import * as React from "react";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import withRouter from "../hooks/withRouter";

const Breadcrumb = (props) => {
  const { history, router } = props;

  const pathname = router.location?.pathname;
  const pathnames = pathname.split("/").filter((x) => x);
  // console.log(pathnames);
  // console.log({pathname});

  return (
    <div className="container">
      <Breadcrumbs aria-label="breadcrumb">
        {pathnames.length > 0 ? (
          <Link
            onClick={() => {
              history.push("/");
            }}
          >
            Home
          </Link>
        ) : (
          <Typography> Home </Typography>
        )}
        {pathnames.map((name, index) => {
          const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
          const isLast = index === pathnames.lenght - 1;
          return isLast ? (
            <Typography key={name}> {name} </Typography>
          ) : (
            <Link
              key={name}
              onClick={() => {
                history.push(routeTo);
              }}
            >
              {" "}
              {name}{" "}
            </Link>
          );
        })}
      </Breadcrumbs>
    </div>
  );
};

export default withRouter(Breadcrumb);
