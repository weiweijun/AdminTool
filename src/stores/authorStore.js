"use strict";

var Dispatcher = require('../dispatcher/appDispatcher');
var ActionTypes = require('../constants/actionTypes');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var _ = require('lodash');
var CHANGE_EVENT = 'change';

var _authors = [];

var AuthorStore = assign({}, EventEmitter.prototype, {     //take an empty new object to extend that object to utilize
// EventEmitter.prototype, and define the rest of store following.
    addChangeListener: function (callback) {
        this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener: function (callback) {
        this.removeListener(CHANGE_EVENT, callback);
    },

    emitChange: function () {
        this.emit(CHANGE_EVENT);
    },

    getAllAuthors: function () {
        return _authors;
    },

    getAuthorById: function (id) {
        return _.find(_authors, {id: id});
    }
});
// no one can mess with Store unless they interact with public api
//up to here is the basic template for any Flux store

Dispatcher.register(function (action) { //notified every single action
    switch (action.actionType) {
        case ActionTypes.INITIALIZE:
            _authors = action.initialData.authors;
            AuthorStore.emitChange();
            break;

        case ActionTypes.CREATE_AUTHOR:
            _authors.push(action.author);  //from dispatch author
            AuthorStore.emitChange(); //anytime emit change any component that registered with the store will be notified
                                        // so they will know update api accordingly
            break;

        case ActionTypes.UPDATE_AUTHOR:
            var existingAuthor = _.find(_authors, {id: action.author.id});
            var existingAuthorIndex = _.indexOf(_authors, existingAuthor);
            _authors.splice(existingAuthorIndex, 1, action.author);
            AuthorStore.emitChange();
            break;

        case ActionTypes.DELETE_AUTHOR:
            _.remove(_authors, function (author) {
                return action.id === author.id;
            });
            AuthorStore.emitChange();
            break;

        default:
            //no op
    }
});

module.exports = AuthorStore;