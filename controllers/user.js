const models = require('../models');

exports.user_create_get = async(req, res) => {

    res.render('pages/register');

};

exports.user_create_post = async(req, res) => {



};

exports.user_update_get = async(req, res) => {

};

exports.user_update_post = async(req, res) => {

};

exports.user_delete_get = async(req, res) => {

};

exports.user_delete_post = async(req, res) => {

};

exports.user_detail = async(req, res) => {

};

exports.user_list = async(req, res) => {

};

exports.user_login_get = async(req, res) => {


};

exports.user_login_post = async(req, res) => {

    res.render('pages/login');

};

exports.user_logout_get = async(req, res) => {


};

exports.user_logout_post = async(req, res) => {


};

exports.user_dashboard_post = async(req, res) => {

    res.render('pages/dashboard');

};

exports.index = function(req, res) {

    res.render('pages/welcome');

};
