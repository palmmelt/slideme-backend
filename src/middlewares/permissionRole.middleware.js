export const permissionRole = (permissionRoles) => {
    return (req, res, next) => {
      const { urole } = req.user;
      try {
        const hasPermission = permissionRoles.includes(role);
  
        if (!hasPermission) {
          throw new Error(`Permission denied for role '${role}' on this API.`);
        }
  
        next();
      } catch (err) {
        return res.status(401).json({
          status: false,
          message: err.message,
          data: null,
        });
      }
    };
  };
  