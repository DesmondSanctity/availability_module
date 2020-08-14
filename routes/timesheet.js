var express = require('express');
var router = express.Router();


// Require our controllers.
var role_controller = require('../controllers/role');
var user_controller = require('../controllers/user');
var department_controller = require('../controllers/department');
var availability_controller = require('../controllers/availability');
var current_business_controller = require('../controllers/current_business');


/// USER ROUTES ///

// GET request for creating a User. NOTE This must come before routes that display User (uses id).
router.get('/user/register', user_controller.user_create_get);

// POST request for creating User.
router.post('/user/register', user_controller.user_create_post);

// GET request to delete User.
router.get('/user/:user_id/delete', user_controller.user_delete_get);

// POST request to delete User.
router.post('/user/:user_id/delete', user_controller.user_delete_post);

// GET request to update User.
router.get('/user/:user_id/update', user_controller.user_update_get);

// POST request to update User.
router.post('/user/:user_id/update', user_controller.user_update_post);

// GET request for one User.
router.get('/user/:user_id', user_controller.user_detail);

// GET request for list of all User.
router.get('/users', user_controller.user_list);

// GET request for User Login.
router.get('/user/login', user_controller.user_login_get);

// POST request for User Login.
router.post('/user/login', user_controller.user_login_post);

// GET request for User Logout.
router.post('/user/logout', user_controller.user_logout_get);

// POST request for User Logout.
router.get('/user/logout', user_controller.user_logout_post);

// GET request for User Dashboard.
router.post('/user/dashboard', user_controller.user_dashboard_post);

/// ROLE ROUTES ///

// GET request for creating Role. NOTE This must come before route for id (i.e. display role).
router.get('/role/create', role_controller.role_create_get);

// POST request for creating Role.
router.post('/role/create', role_controller.role_create_post);

// GET request to delete Role.
router.get('/role/:role_id/delete', role_controller.role_delete_get);

// POST request to delete Role
router.post('/role/:role_id/delete', role_controller.role_delete_post);

// GET request to update Role.
router.get('/role/:role_id/update', role_controller.role_update_get);

// POST request to update Role.
router.post('/role/:role_id/update', role_controller.role_update_post);

// GET request for one Role.
router.get('/role/:role_id', role_controller.role_detail);

// GET request for list of all Roles.
router.get('/roles', role_controller.role_list);


/// DEPARTMENT ROUTES ///

// GET request for creating a Department. NOTE This must come before route that displays Department (uses id).
router.get('/department/create', department_controller.department_create_get);

// POST request for creating Department.
router.post('/department/create', department_controller.department_create_post);

// GET request to delete Department.
router.get('/department/:department_id/delete', department_controller.department_delete_get);

// POST request to delete Department.
router.post('/department/:department_id/delete', department_controller.department_delete_post);

// GET request to update Department.
router.get('/department/:department_id/update', department_controller.department_update_get);

// POST request to update Department.
router.post('/department/:department_id/update', department_controller.department_update_post);

// GET request for one Department.
router.get('/department/:department_id', department_controller.department_detail);

// GET request for list of all Departments.
router.get('/departments', department_controller.department_list);


/// AVAILABILITY ROUTES ///

// GET request for creating Availability. NOTE This must come before route for id (i.e. display availability).
router.get('/availability/create', availability_controller.availability_create_get);

// POST request for creating Availability.
router.post('/availability/create', availability_controller.availability_create_post);

// GET request to delete Availability.
router.get('/availability/:availability_id/delete', availability_controller.availability_delete_get);

// POST request to delete Availability
router.post('/availability/:availability_id/delete', availability_controller.availability_delete_post);

// GET request to update Availability.
router.get('/availability/:availability_id/update', availability_controller.availability_update_get);

// POST request to update Availability.
router.post('/availability/:availability_id/update', availability_controller.availability_update_post);

// GET request for one Availability.
router.get('/availability/:availability_id', availability_controller.availability_detail);

// GET request for list of all Availabilitys.
router.get('/availabilitys', availability_controller.availability_list);


/// CURRENT BUSINESS ROUTES ///

// GET request for creating Current Business. NOTE This must come before route for id (i.e. display current_business).
router.get('/current_business/create', current_business_controller.current_business_create_get);

// POST request for creating Current Business.
router.post('/current_business/create', current_business_controller.current_business_create_post);

// GET request to delete Current Business.
router.get('/current_business/:current_business_id/delete', current_business_controller.current_business_delete_get);

// POST request to delete Current Business
router.post('/current_business/:current_business_id/delete', current_business_controller.current_business_delete_post);

// GET request to update Current Business.
router.get('/current_business/:current_business_id/update', current_business_controller.current_business_update_get);

// POST request to update Current Business.
router.post('/current_business/:current_business_id/update', current_business_controller.current_business_update_post);

// GET request for one Current Business.
router.get('/current_business/:current_business_id', current_business_controller.current_business_detail);

// GET request for list of all Current Businesss.
router.get('/current_businesses', current_business_controller.current_business_list);

// GET timesheet home page.
router.get('/', user_controller.index);

// export all the router created
module.exports = router;
