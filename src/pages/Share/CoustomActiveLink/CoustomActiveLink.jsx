import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

const CoustomActiveLink =({ children, to, ...props }) => {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });
    return (
        <div>
        <Link
          style={{ borderBottom: match ? "1px solid gray" : "none" }}
          to={to}
          {...props}
        >
          {children}
        </Link>
        {/* {match && " (active)"} */}
      </div>
    );
};

export default CoustomActiveLink;