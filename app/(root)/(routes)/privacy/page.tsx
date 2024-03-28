import BannerImage from "../../../../components/ui/banner";
import Container from "../../../../components/ui/container";
import React from "react";

const PrivacyPage = () => {
  return (
    <Container>
      <BannerImage
        data={{
          bannerImageName: "Privacy Banner",
          id: "123",
          imageUrl:
            "https://firebasestorage.googleapis.com/v0/b/editing-app-de1f1.appspot.com/o/CATEGORIES-IMAGES%2FFeedbackHeader.jpg?alt=media&token=ce67fd03-27db-4023-aa71-65ab636b5eae",
          name: "",
        }}
      />
      <div className="flex flex-col px-12 py-8 ">
        <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
        <h2 className="text-xl font-semibold mb-2">
          Personal Information Collection:
        </h2>
        <p className="mb-4">
          We, MegaLinks, understand the importance of protecting the privacy of
          children who use our app. As such, we have developed this privacy
          policy to explain our practices regarding the collection, use, and
          disclosure of personal information from children under the age of 13.
        </p>
        <ul className="list-disc ml-6 mb-4">
          <li>
            We do not collect any personal information from children under the
            age of 13, including name, address, phone number, email address, or
            any other identifiable information.
          </li>
          <li>
            We do not require users to create an account or provide any personal
            information to use our app.
          </li>
          <li>
            We may collect certain non-personal information, such as device
            type, operating system, and app usage data, solely for the purpose
            of improving the app and its performance.
          </li>
        </ul>
        <h2 className="text-xl font-semibold mb-2">Parental Consent:</h2>
        <p className="mb-4">
          We do not require parental consent for children to use our app, as we
          do not collect any personal information from children.
        </p>
        <h2 className="text-xl font-semibold mb-2">Third-Party Services:</h2>
        <p className="mb-4">
          We do not use any third-party services that collect personal
          information from children under the age of 13. We may use certain
          third-party services, such as analytics tools, to collect non-personal
          information about app usage. These services comply with the Children's
          Online Privacy Protection Act (COPPA) and have strict data protection
          policies.
        </p>
        <h2 className="text-xl font-semibold mb-2">Disclosure:</h2>
        <p className="mb-4">
          We do not disclose any personal information to third parties. We may
          disclose non-personal information to third parties for the purpose of
          improving the app and its performance.
        </p>
        <h2 className="text-xl font-semibold mb-2">Contact Us:</h2>
        <p className="mb-4">
          If you have any questions or concerns regarding our privacy policy or
          practices, please contact us at{" "}
          <a href="mailto:contact@email.com" className="text-blue-600">
            karangalevr@gamil.com
          </a>
          .
        </p>
        <h2 className="text-xl font-semibold mb-2">
          Changes to Privacy Policy:
        </h2>
        <p className="mb-4">
          We reserve the right to modify or update this privacy policy at any
          time without prior notice. Any changes will be effective immediately
          upon posting of the updated privacy policy on our app. It is your
          responsibility to review this policy regularly to stay updated on any
          changes.
        </p>
      </div>
    </Container>
  );
};

export default PrivacyPage;
