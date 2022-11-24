const mongoose = require('mongoose');
const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, 'Please enter your first name'],
      trim: true,
      maxLength: [30, 'Your first name cannot exceed 30 characters'],
    },
    lastName: {
      type: String,
      required: [true, 'Please enter your Last name'],
      trim: true,
      maxLength: [30, 'Your last name cannot exceed 30 characters'],
    },
    userName: {
      type: String,
      required: [true, 'Please enter your User name'],
      trim: true,
      maxLength: [30, 'Your user name cannot exceed 30 characters'],
      unique: true,
    },
    email: {
      type: String,
      required: [true, 'Please enter your email'],
      trim: true,
      unique: true,
    },
    password: {
      type: String,
      required: [true, 'Please enter your password'],
      minLength: [6, 'Your password must be longer than 6 characters'],
    },
    picture: {
      type: String,
      trim: true,
      default: 'nopicture.jpg',
    },
    cover: {
      type: String,
      trim: true,
      default: 'nocover.jpg',
    },
    gender: {
      type: String,
      required: [true, 'gender is required'],
    },
    bYear: {
      type: String,
      required: [true, 'birth year is required'],
      trim: true,
    },
    bMonth: {
      type: String,
      required: [true, 'birth month is required'],
      trim: true,
    },
    bDay: {
      type: String,
      required: [true, 'birth day is required'],
      trim: true,
    },
    verified: {
      type: Boolean,
      default: false,
    },
    friends: {
      type: Array,
      default: [],
    },
    friendRequest: {
      type: Array,
      default: [],
    },
    friendRequestSent: {
      type: Array,
      default: [],
    },
    blocked: {
      type: Array,
      default: [],
    },
    blockedBy: {
      type: Array,
      default: [],
    },
    following: {
      type: Array,
      default: [],
    },
    followers: {
      type: Array,
      default: [],
    },
    saved: {
      type: Array,
      default: [],
    },
    searchHistory: [
      {
        user: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'UserModel',
        },
      },
    ],
    details: {
      bio: {
        type: String,
        maxLength: [200, 'Your bio cannot exceed 200 characters'],
      },
      otherNames: {
        type: String,
      },
      job: {
        type: String,
      },
      workplace: {
        type: String,
      },
      highSchool: {
        type: String,
      },
      college: {
        type: String,
      },
      currentCity: {
        type: String,
      },
      homeTown: {
        type: String,
      },
      relationShip: {
        type: String,
        enum: ['single', 'married', 'divorced', 'widowed', 'complicated'],
      },
      Instagram: {
        type: String,
      },
    },
    savedPosts: [
      {
        post: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'PostModel',
        },
        savedAt: {
          type: Date,
          default: Date.now,
        },
      },
    ],
    notifications: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'NotificationModel',
      },
    ],
    messages: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'MessageModel',
      },
    ],
    chats: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ChatModel',
      },
    ],
    posts: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'PostModel',
      },
    ],
    comments: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'CommentModel',
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('UserModel', userSchema);
