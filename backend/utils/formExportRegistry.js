const Enquiry = require("../models/Enquiry");
const Gift = require("../models/Gift");
const Referral = require("../models/Referral");
const Subscriber = require("../models/Subscriber");
const {
  formatDateTime,
  formatPhone,
  valueOrEmpty,
} = require("./exportFormatters");

const formExportRegistry = {
  newsletter: {
    key: "newsletter",
    label: "Newsletter",
    filenamePrefix: "newsletter-submissions",
    model: Subscriber,
    columns: [
      {
        header: "SubmissionId",
        label: "Submission ID",
        value: (record) => String(record._id),
      },
      {
        header: "SubmittedAt",
        label: "Submitted At",
        value: (record) => formatDateTime(record.createdAt),
      },
      {
        header: "FullName",
        label: "Full Name",
        value: (record) => valueOrEmpty(record.fullName),
      },
      {
        header: "Email",
        label: "Email",
        value: (record) => valueOrEmpty(record.email),
      },
      {
        header: "CountryCode",
        label: "Country Code",
        value: (record) => valueOrEmpty(record.countryCode),
      },
      {
        header: "Mobile",
        label: "Mobile",
        value: (record) => valueOrEmpty(record.mobile),
      },
      {
        header: "Status",
        label: "Status",
        value: (record) => valueOrEmpty(record.status),
      },
      {
        header: "UpdatedAt",
        label: "Updated At",
        value: (record) => formatDateTime(record.updatedAt),
      },
    ],
  },
  enquiry: {
    key: "enquiry",
    label: "Enquiry",
    filenamePrefix: "enquiry-submissions",
    model: Enquiry,
    columns: [
      {
        header: "SubmissionId",
        label: "Submission ID",
        value: (record) => String(record._id),
      },
      {
        header: "SubmittedAt",
        label: "Submitted At",
        value: (record) => formatDateTime(record.createdAt),
      },
      {
        header: "Name",
        label: "Name",
        value: (record) => valueOrEmpty(record.name),
      },
      {
        header: "Email",
        label: "Email",
        value: (record) => valueOrEmpty(record.email),
      },
      {
        header: "CountryCode",
        label: "Country Code",
        value: (record) => valueOrEmpty(record.countryCode),
      },
      {
        header: "Phone",
        label: "Phone",
        value: (record) => valueOrEmpty(record.phone),
      },
      {
        header: "CurrentLocation",
        label: "Current Location",
        value: (record) => valueOrEmpty(record.currentLocation),
      },
      {
        header: "TrailName",
        label: "Trail Name",
        value: (record) => valueOrEmpty(record.trailName),
      },
      {
        header: "OtherDestination",
        label: "Other Destination",
        value: (record) => valueOrEmpty(record.otherDestination),
      },
      {
        header: "TravelMonth",
        label: "Travel Month",
        value: (record) => valueOrEmpty(record.travelMonth),
      },
      {
        header: "TravelYear",
        label: "Travel Year",
        value: (record) => valueOrEmpty(record.travelYear),
      },
      {
        header: "Guests",
        label: "Guests",
        value: (record) => valueOrEmpty(record.guests),
      },
      {
        header: "RoomPreference",
        label: "Room Preference",
        value: (record) => valueOrEmpty(record.roomPreference),
      },
      {
        header: "ConnectMethod",
        label: "Connect Method",
        value: (record) => valueOrEmpty(record.connectMethod),
      },
      {
        header: "Message",
        label: "Message",
        value: (record) => valueOrEmpty(record.message),
      },
      {
        header: "Status",
        label: "Status",
        value: (record) => valueOrEmpty(record.status),
      },
      {
        header: "UpdatedAt",
        label: "Updated At",
        value: (record) => formatDateTime(record.updatedAt),
      },
    ],
  },
  referral: {
    key: "referral",
    label: "Refer a Friend",
    filenamePrefix: "refer-a-friend-submissions",
    model: Referral,
    columns: [
      {
        header: "SubmissionId",
        label: "Submission ID",
        value: (record) => String(record._id),
      },
      {
        header: "SubmittedAt",
        label: "Submitted At",
        value: (record) => formatDateTime(record.createdAt),
      },
      {
        header: "ReferrerName",
        label: "Referrer Name",
        value: (record) => valueOrEmpty(record.referrerName),
      },
      {
        header: "ReferrerEmail",
        label: "Referrer Email",
        value: (record) => valueOrEmpty(record.referrerEmail),
      },
      {
        header: "ReferrerPhone",
        label: "Referrer Phone",
        value: (record) =>
          valueOrEmpty(
            formatPhone(record.referrerCountryCode, record.referrerPhone),
          ),
      },
      {
        header: "ReferrerLocation",
        label: "Referrer Location",
        value: (record) => valueOrEmpty(record.referrerLocation),
      },
      {
        header: "FriendName",
        label: "Friend Name",
        value: (record) => valueOrEmpty(record.friendName),
      },
      {
        header: "FriendEmail",
        label: "Friend Email",
        value: (record) => valueOrEmpty(record.friendEmail),
      },
      {
        header: "FriendPhone",
        label: "Friend Phone",
        value: (record) =>
          valueOrEmpty(formatPhone(record.friendCountryCode, record.friendPhone)),
      },
      {
        header: "FriendLocation",
        label: "Friend Location",
        value: (record) => valueOrEmpty(record.friendLocation),
      },
      {
        header: "Message",
        label: "Message",
        value: (record) => valueOrEmpty(record.message),
      },
      {
        header: "Status",
        label: "Status",
        value: (record) => valueOrEmpty(record.status),
      },
      {
        header: "UpdatedAt",
        label: "Updated At",
        value: (record) => formatDateTime(record.updatedAt),
      },
    ],
  },
  gift: {
    key: "gift",
    label: "Gift a Journey",
    filenamePrefix: "gift-a-journey-submissions",
    model: Gift,
    columns: [
      {
        header: "SubmissionId",
        label: "Submission ID",
        value: (record) => String(record._id),
      },
      {
        header: "SubmittedAt",
        label: "Submitted At",
        value: (record) => formatDateTime(record.createdAt),
      },
      {
        header: "SenderName",
        label: "Sender Name",
        value: (record) => valueOrEmpty(record.senderName),
      },
      {
        header: "SenderEmail",
        label: "Sender Email",
        value: (record) => valueOrEmpty(record.senderEmail),
      },
      {
        header: "SenderPhone",
        label: "Sender Phone",
        value: (record) =>
          valueOrEmpty(formatPhone(record.senderCountryCode, record.senderPhone)),
      },
      {
        header: "SenderLocation",
        label: "Sender Location",
        value: (record) => valueOrEmpty(record.senderLocation),
      },
      {
        header: "RecipientName",
        label: "Recipient Name",
        value: (record) => valueOrEmpty(record.recipientName),
      },
      {
        header: "RecipientEmail",
        label: "Recipient Email",
        value: (record) => valueOrEmpty(record.recipientEmail),
      },
      {
        header: "RecipientPhone",
        label: "Recipient Phone",
        value: (record) =>
          valueOrEmpty(
            formatPhone(record.recipientCountryCode, record.recipientPhone),
          ),
      },
      {
        header: "RecipientLocation",
        label: "Recipient Location",
        value: (record) => valueOrEmpty(record.recipientLocation),
      },
      {
        header: "GiftType",
        label: "Gift Type",
        value: (record) => valueOrEmpty(record.giftType),
      },
      {
        header: "JourneyDetails",
        label: "Journey Details",
        value: (record) => valueOrEmpty(record.journeyDetails),
      },
      {
        header: "GiftValue",
        label: "Gift Value",
        value: (record) => valueOrEmpty(record.giftValue),
      },
      {
        header: "Occasion",
        label: "Occasion",
        value: (record) => valueOrEmpty(record.occasion),
      },
      {
        header: "PersonalMessage",
        label: "Personal Message",
        value: (record) => valueOrEmpty(record.personalMessage),
      },
      {
        header: "Status",
        label: "Status",
        value: (record) => valueOrEmpty(record.status),
      },
      {
        header: "UpdatedAt",
        label: "Updated At",
        value: (record) => formatDateTime(record.updatedAt),
      },
    ],
  },
};

const getFormExportDefinition = (formType) => formExportRegistry[formType];

const getAllFormExportDefinitions = () => Object.values(formExportRegistry);

module.exports = {
  getAllFormExportDefinitions,
  getFormExportDefinition,
};
