import Head from "next/head";
import Navbar from "@/components/common/Navbar";
import { Stack, Typography, useMediaQuery } from "@mui/material";
import Footer from "@/components/common/Footer";
import { theme } from "./_app";
import { roboto } from "@/utils/fonts";
import Link from "next/link";

export default function Terms() {
  const isMobileView = useMediaQuery(theme.breakpoints.isMobileView);

  return (
    <>
      <Head>
        <title>Official BINI Members Profiles | BINI Concert 2024</title>
        <meta
          name="description"
          content="Get to know BINI members' age,  BINI Pantropiko concert dates (2024), & exclusive BINI members profile you won't find anywhere else. Be part of the craze today!"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {process.env.NEXT_PUBLIC_PROD_LIVE == "false" && (
          <meta name="robots" content="noindex, nofollow" />
        )}
        <link href="/binicon-main.png" rel="icon"/>
      </Head>
      <main className={roboto.className}>
        <Navbar />

        {/* Terms & Conditions */}
        <Stack
          sx={{
            padding: isMobileView ? "24px" : "30px 70px",
            marginTop: "4rem",
          }}
          color="#454545"
        >
          <Typography
            component="p"
            fontSize={isMobileView ? "32px" : "46px"}
            color="#324B4E"
            fontWeight="800"
          >
            Terms & Conditions
          </Typography>

          <Stack marginTop={isMobileView ? "30px" : "40px"}>
            <Typography component="p" fontWeight="700">
              TERMS OF USE
            </Typography>
            <Typography component="p" lineHeight="normal">
              ABS-CBN Corporation, a corporation duly organized and existing
              under Philippine laws, with business address at Sgt. Esguerra
              Avenue corner Mother Street, Quezon City 1103, Philippines,
              (including its affiliates and subsidiaries,
              `&quot;ABS-CBN`&quot;), allows you access to the joinnow.ph
              website (the “Website”), conditioned on your unqualified agreement
              to all the Terms and Conditions of Use provided herein, including
              its Privacy Policy (
              <Link
                style={{ color: "#1B82F2" }}
                href="https://www.abs-cbn.com/privacyinternational"
                target="_blank" rel="noopener"
              >
                https://www.abs-cbn.com/privacyinternational
              </Link>{" "}
              and{" "}
              <Link
                style={{ color: "#1B82F2" }}
                href="https://www.abs-cbn.com/privacy"
                target="_blank" rel="noopener"
              >
                https://www.abs-cbn.com/privacy
              </Link>
              ) and any rules of conduct as ABS-CBN may hereinafter implement for
              the Website (the Terms and Conditions of Use, including the
              Privacy Policies, shall hereinafter be collectively referred to as
              these “Terms”). These Terms shall apply to all other websites and
              all other digital properties of ABS-CBN (including its
              subsidiaries and its affiliates), that ABS-CBN allows you to
              access through your registration to the Website. Your use of the
              Website constitutes your agreement to all such Terms, as well as
              the policies expressed in our Privacy Policy. Transmitting and
              receiving real-time updates to and from the Website requires an
              online connection between your internet-ready device (the
              “Device”) and the Internet. The Internet connection shall be your
              responsibility and at your expense. The expenses of such
              connection are as prescribed by the agreement between you and your
              internet service provider, and according to its applicable terms
              of payment. ABS-CBN does not provide Internet access. You are
              responsible for all fees associated with your Internet connection.
            </Typography>
          </Stack>

          <Stack marginTop="16px">
            <Typography component="p" fontWeight="700">
              MODIFICATION OF THE TERMS OF USE
            </Typography>
            <Typography component="p" lineHeight="normal">
              ABS-CBN may amend the Terms at any time in its sole discretion.
              ABS-CBN shall notify you of any amendment to the Terms, and you
              understand and agree that your express consent to the amended
              Terms is a precondition to your access of, or to your activity
              within, the Website. ABS-CBN shall likewise post the amended Terms
              in the Website. Your use of the Website after the effective date
              of any amendments to these Terms likewise constitutes your
              agreement to comply and be bound by such amendments, including but
              not limited to the charges associated with the use of the Website,
              if any. You agree to check and you are responsible for checking,
              the Terms periodically so you will be familiar with their content
              as amended or modified from time to time. <br /> If you do not
              indicate your express consent to the Terms as amended, ABS-CBN has
              the right to restrict your access or any activity within the
              Website.
            </Typography>
          </Stack>

          <Stack marginTop="16px">
            <Typography component="p" fontWeight="700">
              LINKS TO THIRD PARTY SITES
            </Typography>
            <Typography component="p" lineHeight="normal">
              Other than the web pages or websites operated by ABS-CBN which may
              be linked to the Website, the Website may contain links to other
              websites operated by third parties (collectively, the &quot;Linked
              Sites&quot;). The Linked Sites are not under the control of
              ABS-CBN and ABS-CBN is not responsible for the contents of any
              Linked Site, including without limitation, any link contained in a
              Linked Site, or any changes or updates to a Linked Site. ABS-CBN
              is not responsible for webcasting or any other form of
              transmission received from any Linked Site. ABS-CBN is providing
              these links to you only as a convenience, and the inclusion of any
              link does not imply endorsement by ABS-CBN of the site or any
              association with its operators. ABS-CBN encourages you to review
              the terms of use and privacy statements or policies of the Linked
              Sites you choose to link to from the Website so that you can
              understand how these Linked Sites collect, use and share your
              personal information and other data. ABS-CBN is not responsible
              for the terms of use, privacy statements or policies or other
              content on these Linked Sites.
            </Typography>
          </Stack>

          <Stack marginTop="16px">
            <Typography component="p" fontWeight="700">
              CONTENT USAGE
            </Typography>
            <Typography component="p" lineHeight="normal">
              You acknowledge that : (i) by using the Website, you will have
              access to, among others, software, graphics, news, publications,
              articles, photographs, sound effects, music, animation-style video
              and text (collectively, the “Content”); (ii) the Content may be
              provided under license by independent content providers, including
              content contributions from members of said independent content
              providers (all such independent content providers shall
              collectively be referred as the “Content Providers”); and (iii)
              that ABS-CBN and the Content Providers have rights in their
              respective Content under copyright and other applicable laws, and
              that you accept full responsibility and liability for your use of
              any Content in violation of any such rights. You agree that you
              will not use any Content other than in connection with the use of
              the Website and for its intended purpose only. You agree that
              ABS-CBN has the right, but not the obligation, to remove any
              Content at any time for any reason including those it deems to be
              harmful, offensive, or otherwise in violation of these Terms. You
              acknowledge that you do not have the right to use, copy, download,
              create, publish, distribute and create any Content or derivative
              works of such Content except as expressly permitted under these
              Terms or by ABS-CBN.
              <br />
              <br />
              As a condition of your use of the Website, you warrant to ABS-CBN
              that you will not use the Website, the Content, or any of its
              components, for any purpose that is unlawful or prohibited by
              these Terms, conditions, and notices. You may not use the Website
              or the Content in any manner which could damage, disable,
              overburden, or impair the Website or interfere with any other
              party&apos;s use and enjoyment of the Website or the Content. You
              may not sell or auction any accounts, characters, items or
              copyrighted material in or from the Website. You may not obtain or
              attempt to obtain any materials or information through any means
              not intentionally made available or provided for through the
              Website.
            </Typography>
          </Stack>

          <Stack marginTop="16px">
            <Typography component="p" fontWeight="700">
              ACCOUNT
            </Typography>
            <Typography component="p" lineHeight="normal">
              You may use the Website (as defined in these Terms) by registering
              an account (the “Account”) and submitting a form that is provided
              by the website. You may be required to submit your personal
              information when you register your Account or when you Subscribe
              to a Newsletter and become a member of an Artist Fandom as
              described below. ABS-CBN may also establish and require from time
              to time additional or different means of identification and
              authentication for logging in and accessing the Website or for
              accessing certain features or designated sections of the Website.
              Your log-in details shall be your responsibility. You shall be
              fully accountable for any use or misuse of your Account and
              personal details as a result of conveying your details to someone
              else. You shall maintain your log-in details in absolute
              confidentiality and not disclose these log-in details to others.
              You shall change your password frequently and at least once every
              six (6) months or whenever prompted by the Website to do so.
              ABS-CBN shall not incur any liability for any unauthorized access
              to your account by third parties or damages from your failure or
              refusal to do so.
            </Typography>
            <Typography marginTop="16px" component="p" lineHeight="normal">
              The Account you provide during registration will be used to
              identify you when you use the Website, or other websites or
              digital properties owned by ABS-CBN. You shall not use the Account
              of another person, or a name which violates any third party&apos;s
              trademark right, copyright, or other proprietary right, or which
              ABS-CBN deems in its discretion to be vulgar or otherwise
              offensive. You shall have sole liability for all activities
              conducted through your Account contact you.
            </Typography>
            <Typography marginTop="16px" component="p" lineHeight="normal">
              You shall provide full, accurate and truthful information.
              Providing wrongful or erroneous information might prevent you from
              using the Website and might impede ABS-CBN&apos;s ability to
              contact you.
            </Typography>
            <Typography marginTop="16px" component="p" lineHeight="normal">
              The information you provide during registration will be kept by
              ABS-CBN and will not be used in any manner inconsistent with the
              Terms herein. However, your account name may be disclosed and
              visible to other users of the Website when you participate in the
              various interactive activities on the Website, when you use the
              chat feature of the Website or submit an update of username
              details to continue to use the chat feature of the Website.
            </Typography>

            <Typography component="p" lineHeight="normal">
              You also acknowledge and agree to the following rights of ABS-CBN,
              exercisable at its absolute discretion: <br />
              1. Former Members. Members whose Accounts have been terminated by
              ABS-CBN shall not access the Website in any manner or for any
              reason, including through any other Account, without the express
              written permission of ABS-CBN. <br />
              2. Related Accounts. If ABS-CBN terminates an Account, ABS-CBN
              reserves the right to terminate any other accounts that share the
              same member name, phone number, email address, postal address,
              Internet Protocol address, or credit card number with the
              terminated account. 3. Right to Ban or Forfeit Accounts. ABS-CBN
              reserves the right to ban or forfeit an Account at its sole
              discretion for violation of the Use Restrictions below and these
              Terms and Conditions. <br />
              3. Right to Ban or Forfeit Accounts. ABS-CBN reserves the right to
              ban or forfeit an Account at its sole discretion for violation of
              the Use Restrictions below and these Terms and Conditions. <br />
              4. Disclosure. ABS-CBN reserves the right at all times to disclose
              the identity of Account holders or other information related
              thereto as may be necessary to comply with any law, regulation, or
              government request. <br />
              5. Transfers. Except to the extent necessary to effectuate the
              specific uses for which you have contracted with ABS-CBN, you
              shall not assign, rent, lease, sell, sublicense, or otherwise
              transfer your Account to another party without prior written
              consent of ABS-CBN. Any party authorized by ABS-CBN to receive the
              Account must agree to be bound by the terms and conditions of
              these Terms. <br />
              You acknowledge that, pursuant to Republic Act No. 10175, or the
              Cybercrime Prevention Act of 2012, law enforcement authorities,
              with due cause, shall be authorized to collect or record by
              technical or electronic means traffic data in real-time associated
              with specified communications transmitted by means of a computer
              system. Traffic data refer only to the communication&apos;s
              origin, destination, route, time, date, size, duration or type of
              underlying service, but not content nor identities. The integrity
              of traffic data and subscriber information relating to
              communication services provided by a service provider shall be
              preserved for a minimum period of six (6) months from the date of
              the transaction. Content data shall be similarly preserved for six
              (6) months from the date of receipt of the order from law
              enforcement authorities requiring its preservation
            </Typography>
            <Typography marginTop="16px" component="p" lineHeight="normal">
              By creating an Account and/or using the Website, you likewise
              agree to receive push messages, newsletters, text blasts,
              announcements, and other alerts (“Alerts”) from ABS-CBN via
              cellphone, telephone, e-mail, and/or post.
            </Typography>
            <Typography marginTop="16px" component="p" lineHeight="normal">
              Should you decide that you are no longer interested to receive
              Alerts via cellphone, telephone, e-mail and/or post, you have the
              option be taken off ABS-CBN&apos;s mailing list. This option may
              be availed of by going to the Accounts Management Page of the
              Website and ticking the Account Cancellation button. If you choose
              to avail of this option, you will no longer receive any Alert from
              ABS-CBN.
            </Typography>
            <Typography marginTop="16px" component="p" lineHeight="normal">
              If you do not wish to be permanently removed from ABS-CBN&apos;s
              mailing list but are interested to receive Alerts or any other
              correspondence from ABS-CBN at a future time, kindly go to the
              Accounts Management Page and tick the button allowing ABS-CBN to
              contact you at a future time for Alerts and other correspondence.
            </Typography>
          </Stack>

          <Stack marginTop={isMobileView ? "30px" : "40px"}>
            <Typography
              component="p"
              fontSize={isMobileView ? "24px" : "32px"}
              color="#324B4E"
              fontWeight="800"
              marginT="40px"
            >
              ARTIST PAGE
            </Typography>
            <Typography marginTop="10px" component="p" lineHeight="normal">
              This is an online platform designed to showcase the work of the
              Artist and enable the Artist to connect with a wider audience. It
              functions like a digital version of an artist&apos;s portfolio but
              with the added benefits of broader reach and interactive features
              within the Website, such as:
            </Typography>

            <Typography marginTop="16px" component="p" lineHeight="normal">
              1. Registration
            </Typography>
            <ul style={{ margin: 0, paddingLeft: 30 }}>
              <li>
                You may register for an account on the Website to access certain
                features, including exclusive content, newsletters, and the
                ability to become a fan through fan subscription (Fandom), in
                accordance with the terms provided in the succeeding paragraphs.
              </li>
              <li>
                During registration, you are required to provide accurate and
                complete information. You are also responsible for maintaining
                the confidentiality of your login credentials and for any
                activity that occurs under your account.
              </li>
              <li>
                We reserve the right to suspend or terminate your account if you
                violate these Terms or if we suspect any fraudulent or
                unauthorized activity.
              </li>
            </ul>
            <Typography marginTop="16px" component="p" lineHeight="normal">
              2. Access to Videos and Photos
            </Typography>
            <ul style={{ margin: 0, paddingLeft: 30 }}>
              <li>
                The videos and photos displayed on the Website are the
                intellectual property of ABS-CBN or ABS-CBN&apos;s licensors as
                applicable.
              </li>
              <li>
                You may not reproduce, modify, distribute, or commercially
                exploit any content from the Website without the express written
                permission of ABS-CBN.
              </li>
            </ul>
            <Typography marginTop="16px" component="p" lineHeight="normal">
              3. Newsletter
            </Typography>
            <ul style={{ margin: 0, paddingLeft: 30 }}>
              <li>
                By subscribing to the newsletter, you agree to receive emails
                from ABS-CBN about news, events, and promotions.
              </li>
              <li>
                You can unsubscribe from the newsletter at any time by clicking
                the unsubscribe link at the bottom of any email.
              </li>
            </ul>
            <Typography marginTop="16px" component="p" lineHeight="normal">
              4. Become a Fan (Fandom)
            </Typography>
            <ul style={{ margin: 0, paddingLeft: 30 }}>
              <li>
                Becoming a fan through a subscription may offer exclusive
                benefits like discounts on merchandise, early access to new
                content, or invitations to special events.
              </li>
              <li>Subscription fees are non-refundable.</li>
              <li>
                ABS-CBN reserves the right to modify or discontinue fan
                subscription benefits at any time.
              </li>
            </ul>
            <Typography marginTop="16px" component="p" lineHeight="normal">
              5. Exclusive Content
            </Typography>
            <ul style={{ margin: 0, paddingLeft: 30 }}>
              <li>
                The Website may offer access to exclusive content, such as
                behind-the-scenes videos or early access to artwork, to
                registered users or paying subscribers.
              </li>
            </ul>
            <Typography marginTop="16px" component="p" lineHeight="normal">
              6. Merchandise
            </Typography>
            <ul style={{ margin: 0, paddingLeft: 30 }}>
              <li>The Website may offer merchandise for purchase.</li>
              <li>
                The purchase of merchandise is subject to a separate set of
                terms and conditions, which may be found on the checkout page.
              </li>
            </ul>
            <Typography marginTop="16px" component="p" lineHeight="normal">
              7. Get to Know More About the Artist
            </Typography>
            <ul style={{ margin: 0, paddingLeft: 30 }}>
              <li>
                The Website may provide information about an Artist&apos;s
                biography, artistic process, and upcoming events.
              </li>
              <li>
                This information is intended for informational purposes only and
                may be subject to change.
              </li>
            </ul>
          </Stack>

          <Typography marginTop="16px" component="p" fontWeight="700">
            USE RESTRICTIONS
          </Typography>
          <Stack gap="16px">
            <Typography component="p" lineHeight="normal">
              There are certain conducts which are strictly prohibited on the
              Website and the Content. Please read the following restrictions
              carefully. Your failure to comply with the provisions set forth
              below may result herein (at ABS-CBN&apos;s sole discretion) in the
              termination of your access to the Website and the Content and may
              also expose you to civil and/or criminal liability.
            </Typography>
            <Typography component="p" lineHeight="normal">
              You shall not, whether by yourself or anyone on your behalf: (i)
              copy, download, modify, adapt, translate, reverse engineer,
              decompile, or disassemble any portion of the Content or the
              Website, and in any way or publicly display, perform, or
              distribute them; (ii) make any use of the Content on any other
              website or networked computer environment for any purpose, or
              replicate or copy the Content without ABS-CBN&apos;s prior written
              consent; (iii) create a browser or border environment around the
              Content (no frames or inline linking); (iv) interfere with or
              violate any third party or other user&apos;s right to privacy or
              other rights, including copyrights and any other intellectual
              property rights of others, or harvest or collect personally
              identifiable information about visitors or users of the Website
              and/or the Content without their express consent, including using
              any robot, spider, site search or retrieval application, or other
              manual or automatic device or process to retrieve, index, or
              data-mine; (v) defame, abuse, harass, stalk, threaten, or
              otherwise violate the legal rights of others, including
              others&apos; copyrights, and other intellectual property rights;
              (vi) transmit or otherwise make available in connection with the
              Website and/or the Content any virus, worm, Trojan Horse, time
              bomb, web bug, spyware, or any other computer code, file, or
              program that may or is intended to damage or hijack the operation
              of any hardware, software, or telecommunications equipment, or any
              other actually or potentially harmful, disruptive, or invasive
              code or component; (vii) interfere with or disrupt the operation
              of the Website and/or the Content, or the servers or networks that
              host the Website and/or the Content or make the Website and/or
              Content available, or disobey any requirements, procedures,
              policies, or regulations of such servers or networks; (viii) sell,
              license, or exploit for any commercial purposes any use of or
              access to the Content and/or the Website; (ix) frame or mirror any
              part of the Website and/or the Content without ABS-CBN&apos;s
              prior express written authorization; (x) create a database by
              systematically downloading and storing all or any of the Content
              from the Website; (xi) forward any data generated from the Website
              and/or the Content without the prior written consent of ABS-CBN;
              (xii) transfer or assign your accounts&apos; password, even
              temporarily, to a third party; (xiii) use the Website and/or the
              Content for any illegal, immoral or unauthorized purpose; (xiv)
              use the Content, the Website, and/or for non-personal or
              commercial purposes without ABS-CBN&apos;s express prior written
              consent; or (xv) infringe or violate any of these Terms.
            </Typography>
            <Typography component="p" lineHeight="normal">
              You shall not commit any of the Cybercrime Offenses defined and
              penalized in the Cybercrime Prevention Act of 2012: Illegal
              Access,Illegal Interception, Data Interference, System
              Interference, Misuse of Devices, Cyber-squatting, Computer-related
              Forgery, Computer-related Fraud, Computer-related Identity Theft,
              Cybersex, Child Pornography, Unsolicited Commercial
              Communications, Libel, Aiding or Abetting in the Commission of
              Cybercrime and Attempt in the Commission of Cybercrime. You
              understand that a prosecution under the Cybercrime Prevention Act
              of 2012 shall be without prejudice to any liability for violation
              of any provision of the Revised Penal Code, as amended, or special
              laws.
            </Typography>
          </Stack>

          <Typography marginTop="16px" component="p" fontWeight="700">
            CUSTOMER SERVICE AND TECHNICAL SUPPORT
          </Typography>
          <Typography component="p" lineHeight="normal">
            For any information on the Website or the Game, you can contact
            ABS-CBN through{" "}
            <Link
              style={{ color: "#1B82F2" }}
              href="mailto:fandom_support@abs-cbn.com"
              target="_blank" rel="noopener"
            >
              fandom_support@abs-cbn.com.
            </Link>
          </Typography>

          <Typography marginTop="16px" component="p" fontWeight="700">
            USE OF COMMUNICATION SERVICES
          </Typography>
          <Stack gap="16px">
            <Typography component="p" lineHeight="normal">
              The Website may contain bulletin board services, chat areas, news
              groups, forums, communities, personal web pages, calendars, and/or
              other message or communication facilities designed to enable you
              to communicate with the public at large or with a group
              (collectively, &quot;Communication Services&quot;), you agree to
              use the Communication Services only to post, send and receive
              messages and material that are proper and related to the
              particular Communication Service. By way of example, and not as a
              limitation, you agree that when using a Communication Service, you
              will not:
            </Typography>
            <Stack>
              <Typography component="p" lineHeight="normal">
                1. Upload, post, e-mail or otherwise transmit Content that
                infringes any third party rights, law, regulation or these Terms
                of Use;
              </Typography>
              <Typography component="p" lineHeight="normal">
                2. Impersonate any person or entity, including, but not limited
                to, any director, officer, employee, shareholder, agent or
                representative of ABS-CBN, its parent company, its affiliates
                and subsidiaries, or falsely state or otherwise misrepresent
                your affiliation with any person or entity;
              </Typography>
              <Typography component="p" lineHeight="normal">
                3. Defame, abuse, harass, stalk, threaten or otherwise violate
                the legal rights (such as rights of privacy and publicity) of
                others;
              </Typography>
              <Typography component="p" lineHeight="normal">
                4. Publish, post, upload, distribute or disseminate any
                inappropriate, profane, defamatory, infringing, obscene,
                indecent or unlawful topic, name, material or information;
              </Typography>
              <Typography component="p" lineHeight="normal">
                5. Upload files that contain software or other material
                protected by intellectual property laws (or by rights of privacy
                and publicity) unless you own or control the rights thereto or
                have received all necessary consents;
              </Typography>
              <Typography component="p" lineHeight="normal">
                6. Upload files that contain viruses, corrupted files, or any
                other similar software or programs that may damage
                ABS-CBN&apos;s network, or the operation of another&apos;s
                computer;
              </Typography>
              <Typography component="p" lineHeight="normal">
                7. Advertise or offer to sell or buy any goods or services for
                any business purpose, unless such Communication Service
                specifically allows such messages;
              </Typography>
              <Typography component="p" lineHeight="normal">
                8. Conduct or forward surveys, contests, pyramid schemes or
                chain letters;
              </Typography>
              <Typography component="p" lineHeight="normal">
                9. Download any file posted by another user of a Communication
                Service that you know, or reasonably should know, cannot be
                legally distributed in such manner;
              </Typography>
              <Typography component="p" lineHeight="normal">
                10. Falsify or delete any author attributions, legal or other
                proper notices or proprietary designations or labels of the
                origin or source of software or other material contained in a
                file that is uploaded;
              </Typography>
              <Typography component="p" lineHeight="normal">
                11. Restrict or inhibit any other user from using and enjoying
                the Communication Services;
              </Typography>
              <Typography component="p" lineHeight="normal">
                12. Violate any code of conduct or other guidelines which may be
                applicable for any particular Communication Service;
              </Typography>
              <Typography component="p" lineHeight="normal">
                13. Harvest or otherwise collect information about others,
                including e-mail addresses, without their consent; and
              </Typography>
              <Typography component="p" lineHeight="normal">
                14. Violate any applicable laws or regulations.
              </Typography>
              <Typography component="p" lineHeight="normal">
                ABS-CBN has no obligation to monitor the Communication Services.
                However, ABS-CBN reserves the right to review materials posted
                to a Communication Service and to remove any materials in its
                sole discretion. ABS-CBN reserves the right to terminate your
                access to any or all of the Communication Services at any time
                without notice for any reason whatsoever and without incurring
                any liability.
              </Typography>
            </Stack>

            <Typography component="p" lineHeight="normal">
              ABS-CBN does not control or endorse the content, messages or
              information found in any Communication Service and, therefore,
              ABS-CBN specifically disclaims any liability with regard to the
              Communication Services and any actions resulting from your
              participation in any Communication Service. Managers and hosts are
              not authorized ABS-CBN spokespersons, and their views do not
              necessarily reflect those of ABS-CBN, its parent company,
              subsidiaries, affiliates, their respective directors, officers and
              employees.
            </Typography>
            <Typography component="p" lineHeight="normal">
              Materials uploaded to a Communication Service may be subject to
              posted limitations on usage, reproduction and/or dissemination.
              You are responsible for adhering to such limitations if you
              download the materials.
            </Typography>
          </Stack>

          <Typography marginTop="16px" component="p" fontWeight="700">
            PARENTAL GUIDANCE
          </Typography>
          <Typography component="p" lineHeight="normal">
            While ABS-CBN may choose to monitor and take action upon
            inappropriate Content, chat or links to the Website, it is possible
            that at any time there may be language or other material accessible
            on or through the Website that may be inappropriate for children or
            offensive to some users of any age, nationality or culture. ABS-CBN
            cannot ensure that other users will not provide Content or access to
            Content that parents or guardians may find inappropriate or that any
            user may find objectionable. ABS-CBN does not as a matter of policy
            pre-screen the content of the materials or communications
            transmitted by each user. It shall be your responsibility to screen
            and access Content that are appropriate to your age level and
            further warrants that you have secured the necessary consent and
            advice from your parents and/or guardian to avail or use the
            Website.
          </Typography>

          <Typography marginTop="16px" component="p" fontWeight="700">
            INTERRUPTION OF SERVICE
          </Typography>
          <Typography component="p" lineHeight="normal">
            ABS-CBN reserves the right to interrupt use and access to the
            Website from time to time, with or without prior notice, in order to
            perform maintenance.
          </Typography>
          <Typography marginTop="16px" component="p" lineHeight="normal">
            You acknowledge that the access to the Website may be interrupted
            for reasons beyond the control of ABS-CBN, and ABS-CBN cannot
            guarantee that you will be able to access the Website.. ABS-CBN
            shall not be liable for any interruption and/or access delay or
            failure to the Website resulting from any causes beyond its
            reasonable control or for any disruptions arising from or
            attributable to your actions.
          </Typography>

          <Typography marginTop="16px" component="p" fontWeight="700">
            MATERIALS PROVIDED TO OR POSTED AT THE WEBSITE
          </Typography>
          <Stack gap="16px">
            <Typography component="p" lineHeight="normal">
              ABS-CBN does not claim ownership of the materials you provide to
              the Website (including feedback and suggestions) or post, upload,
              input or submit to Website or its associated services
              (collectively &quot;User-generated Content&quot;). However, by
              posting, uploading, inputting, providing or submitting
              User-generated Content, you are granting ABS-CBN, its subsidiaries
              and affiliate svermission to use the User-generated Content in
              connection with the operation of their businesses including,
              without limitation, the rights to: copy, distribute, transmit,
              publicly display, publicly perform, reproduce, edit, translate and
              reformat the User-generated Content, and to publish your name in
              connection with the User-generated Content.
            </Typography>
            <Typography component="p" lineHeight="normal">
              No compensation will be paid with respect to the use of the
              User-generated Content, as provided herein. ABS-CBN is under no
              obligation to post or use any User-generated Content you may
              provide and ABS-CBN may remove any User-generated Content at any
              time in its sole discretion.
            </Typography>
            <Typography component="p" lineHeight="normal">
              By posting, uploading, inputting, providing or submitting the
              User-generated Content, you warrant and represent that you own,
              control or have secured all necessary licenses, permits and
              permissions over all of the rights to the User-generated Content
              as described in this section including, without limitation, all
              the rights necessary for you to provide, post, upload, input or
              submit the User-generated Content.
            </Typography>
          </Stack>

          <Typography marginTop="16px" component="p" fontWeight="700">
            LIMITATIONS ON LIABILITY
          </Typography>
          <Stack>
            <Typography component="p" lineHeight="normal">
              1. The content, information, software, products, and services
              included in or available through the website may include
              inaccuracies or typographical errors. Changes are periodically
              added to the information herein. ABS-CBN, its content providers
              and/or suppliers may make improvements and/or changes in the
              website at any time. Any advice received via the website should
              not be relied upon for personal, medical, legal or financial
              decisions and you should consult the appropriate professional for
              the specific advice tailored to your situation.
            </Typography>
            <Typography component="p" lineHeight="normal">
              2. ABS-CBN provides the website, the content and all other
              components on an “as is” basis. They cannot be customized to
              fulfill the needs of each and every user. ABS-CBN hereby expressly
              disclaims all warranties or conditions of any kind, written or
              oral, express, implied or statutory, including without limitation
              any implied warranty of title, non-infringement, merchantability
              or fitness for a particular purpose, features, quality, title,
              compatibility, performance, security or accuracy. Without limiting
              the foregoing, ABS-CBN does not ensure continuous, error-free,
              secure or virus free operation of the website. ABS-CBN does not
              warrant that the website will always be available or free from all
              harmful components, or that it is safe, secured from unauthorized
              access to ABS-CBN&apos;s computers, immune from damages, free of
              malfunctions, bugs or failures and software communication
              failures, originating either in ABS-CBN or its providers.
            </Typography>

            <Typography component="p" lineHeight="normal">
              3. No representation or warranty is made regarding the
              availability, accuracy or reliability of the website, or any
              content, alerts or other functionality of the website; and you
              acknowledge that your use of the same is at your own discretion
              and risk.
            </Typography>

            <Typography component="p" lineHeight="normal">
              4. In no event shall ABS-CBN, its content providers, and/or its
              suppliers or any of its shareholders, partners, affiliates,
              directors, officers, employees, agents or suppliers, be liable to
              you or any third party for any direct, indirect, punitive,
              incidental, special, consequential damages or any damages
              whatsoever including, without limitation, damages for loss of use,
              data or profits, arising out of or in any way connected with the
              use of performance of the website and all its other components, or
              with the delay or inability to use the website or related
              services, the provision of or failure to provide services, or from
              your reliance on the content of the website, including, without
              limitation, content originating from third parties, or from any
              communication with the website, or with other users on or through
              the website, or from any denial or cancellation of your user
              account, or from retention deletion, disclosure and any other use
              or loss of your content and related graphics obtained through the
              website, or otherwise arising out of the use of the website,
              whether based on contract, tort, negligence, strict liability or
              otherwise, even if ABS-CBN has or any of its suppliers have been
              advised of the possibility of damages. If you are dissatisfied
              with any portion of the website, or with any of these terms, your
              sole and exclusive remedy is to discontinue using the website.
            </Typography>

            <Typography component="p" lineHeight="normal">
              5. You agree and acknowledge that you assume sole, exclusive,
              absolute and full responsibility for the use of the service, that
              the use of the service is entirely at your own risk, and that it
              is your sole responsibility to provide current and accurate
              information. ABS-CBN disclaims any responsibility and liability
              for inaccurate or misleading information, invasion of privacy,
              libel, defamation, or any other civil, criminal act or
              administrative act, arising from the use of the website.
            </Typography>
          </Stack>

          <Typography marginTop="16px" component="p" fontWeight="700">
            INDEMNIFICATION
          </Typography>
          <Typography component="p" lineHeight="normal">
            You agree to defend, indemnify and hold harmless ABS-CBN, its parent
            company, its subsidiaries and affiliates, their respective
            shareholders, partners, affiliates, directors, officers, employees,
            representatives, agents or suppliers, its licensees, distributors,
            Content Providers from all damages, liabilities, claims and
            expenses, including attorneys&apos; fees and costs, arising from
            your breach or violation of any of the representations, warranties,
            or conditions of these Terms.
          </Typography>

          <Typography marginTop="16px" component="p" fontWeight="700">
            TERMINATION
          </Typography>
          <Typography component="p" lineHeight="normal">
            ABS-CBN may terminate your access to the Website (including your
            Account) immediately and without notice under the following
            circumstances:
          </Typography>

          <Typography marginTop="16px" component="p" lineHeight="normal">
            1. If you breach or violate any of the conditions, obligations or
            provisions of these Terms;
          </Typography>
          <Typography component="p" lineHeight="normal">
            2. If you infringe any third party intellectual property rights or
            expose the Website and ABS-CBN, its officers, employees and
            representatives from any possible damages, liabilities, claim or
            action for infringement of intellectual property rights;
          </Typography>
          <Typography component="p" lineHeight="normal">
            3. If ABS-CBN is unable to verify or authenticate any information
            you have provided; and
          </Typography>
          <Typography component="p" lineHeight="normal">
            4. Under any other circumstances under law or equity.
          </Typography>
          <Typography component="p" lineHeight="normal">
            The foregoing circumstances shall result to your inability to access
            the Website without prejudice to any other rights or remedies
            ABS-CBN may have at law or in equity.
          </Typography>

          <Typography marginTop="16px" component="p" fontWeight="700">
            LIMITATIONS
          </Typography>
          <Typography component="p" lineHeight="normal">
            Subject to the limitations on liability of ABS-CBN, should you
            desire to file any cause of action against ABS-CBN, arising out of
            or related to the Website, you must do so within one (1) year of the
            day you become aware of the cause of action. Failure to file a
            lawsuit within the aforementioned timeframe will bring about the
            permanent barring of the cause of action, and will constitute your
            voluntary, complete and final waiver of your right to file a lawsuit
            against ABS-CBN.
          </Typography>

          <Typography marginTop="16px" component="p" fontWeight="700">
            COPYRIGHT NOTICE
          </Typography>
          <Typography component="p" lineHeight="normal">
            All contents of the Website are ©2023 ABS-CBN Corporation. All
            Rights Reserved.
          </Typography>
          <Typography component="p" lineHeight="normal">
            All intellectual property rights in and to the Website and its
            database, including copyrights, trademarks, industrial designs,
            patents and trade secrets are either the exclusive property of
            ABS-CBN or licensed to ABS-CBN.
          </Typography>
          <Typography marginTop="16px" component="p" lineHeight="normal">
            Copying, distributing, publicly displaying, offering to the public
            via communication, transferring to the public, modifying, adapting,
            processing, creating derivative works, selling or leasing, any part
            of the Website, in any manner or means without the prior written
            consent of ABS-CBN, is strictly forbidden. The Website, its design
            and logo, and other trade and/or service marks are property of
            ABS-CBN and may not be used in any of the aforementioned means.
          </Typography>
          <Typography marginTop="16px" component="p" lineHeight="normal">
            ABS-CBN may protect the Website by technological means intended to
            prevent unauthorized use of the Website. You undertake not to
            circumvent these means. Without derogating ABS-CBN&apos;s rights
            under these Terms or under any applicable law, infringement of the
            rights in and to the Website shall result in the termination of all
            your rights under these Terms. In such an event, you must
            immediately cease any and all uses of the Website.
          </Typography>

          <Typography marginTop="16px" component="p" fontWeight="700">
            THIRD PARTY TRADEMARKS
          </Typography>
          <Typography component="p" lineHeight="normal">
            The names of actual companies and products mentioned herein may be
            the trademarks of their respective owners. Any rights not expressly
            granted herein are reserved.
          </Typography>

          <Typography marginTop="16px" component="p" fontWeight="700">
            GENERAL PROVISIONS
          </Typography>
          <Typography component="p" lineHeight="normal">
            Failure or omission on the part of ABS-CBN to avail of or enforce
            any term or condition provided herein or by law shall not be deemed
            a waiver of ABS-CBN&apos;s right to enforce the same, or to avail of
            the remedies available and provided by law or equity, nor absolve
            you from liability for your obligations to ABS-CBN. A novation of
            any of the terms and conditions herein shall not be effective
            against ABS-CBN unless the same is made in writing by ABS-CBN.
          </Typography>
          <Typography marginTop="16px" component="p" lineHeight="normal">
            To the maximum extent permitted by law, these Terms is governed by
            the laws of the Republic of the Philippines. In all disputes arising
            out of or relating to the use of the Website, you hereby consent to
            the exclusive jurisdiction and venue of the proper courts in the
            Republic of the Philippines, without applying any conflicts of law
            principle which would require application of the law of any other
            jurisdiction. ABS-CBN&apos;s performance herein is subject to
            existing laws and legal process, and nothing contained herein
            derogates ABS-CBN&apos;s right to comply with governmental, court
            and law enforcement requests or requirements relating to your use of
            the Website or information provided to or gathered by ABS-CBN with
            respect to such use. If any part of these Terms is determined to be
            invalid or unenforceable pursuant to Philippine law including, but
            not limited to, the warranty disclaimers and liability limitations
            set forth above, then the invalid or unenforceable provision will be
            deemed superseded by a valid, enforceable provision that most
            closely matches the intent of the original provision and the
            remainder of the agreement shall continue in effect. Unless
            otherwise specified herein, these Terms constitutes the entire
            agreement between you and ABS-CBN with respect to the Website and it
            supersedes all prior or contemporaneous communications and
            proposals, whether electronic, oral or written, between you and
            ABS-CBN with respect to the Website. A printed version of these
            Terms and of any notice given in electronic form shall be admissible
            in judicial or administrative proceedings based upon or relating to
            this agreement to the same extent and subject to the same conditions
            as other business documents and records originally generated and
            maintained in printed form. These Terms and Conditions and all
            related documents shall be drawn up in English.
          </Typography>

          <Typography marginTop="16px" component="p" fontWeight="700">
            NO LEGAL RELATIONSHIP
          </Typography>
          <Typography component="p" lineHeight="normal">
            These Terms and the use of the Website, including uploading any data
            and contents by you onto the Website including ABS-CBN&apos;s
            databases and data do not, and shall not be construed to create any,
            partnership, joint venture, employer-employee, agency, or
            franchisor-franchisee relationship in any way and of any kind
            between the parties hereto. Your use of the Website for your
            enjoyment and benefit constitutes the sole and sufficient
            consideration for any contribution you have to the Website, and any
            other data.
          </Typography>
        </Stack>

        <Footer />
      </main>
    </>
  );
}
