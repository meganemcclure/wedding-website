import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";

const questions = [
	{
		q: <h1>How do I fill out the RSVP form?</h1>,
		a: (
			<p>
				Click the RSVP button on the homepage of our wedding website, and
				complete the Google form. Once you have completed the form, refresh the
				page to fill it out for another guest.
				<br />
				<br />
				Please complete the form once per guest. If you are attending with
				children, please complete the form once per child.
				<br />
				<br />
				If you have any questions or concerns about the RSVP, feel free to
				contact Megan at{" "}
				<Link
					href={"mailto:meganemcclure@gmail.com"}
					className={"underline  decoration-1"}
				>
					meganemcclure@gmail.com
				</Link>
				.
			</p>
		),
	},
	{
		q: <h1>What should I wear?</h1>,
		a: (
			<p>
				Please dress in cocktail or semi-formal attire.
				<br />
				<br />
				We recommend wearing shoes you can walk in. This will be an
				indoor/outdoor event (weather permitting), and there may be gravel,
				stone steps, grass, etc.
			</p>
		),
	},
	{
		q: <h1>Where can I book a hotel?</h1>,
		a: (
			<p>
				We recommend booking a hotel early! The August long weekend is a busy
				tourist weekend, and hotels may book up quickly.
				<br />
				<br />
				Some of our recommended locations are the{" "}
				<Link
					href={
						"https://www.hilton.com/en/locations/canada/ontario/sudbury/hampton-by-hilton/?WT.mc_id=zlada0ww1hx2psh3ggl4advbpp5dkt6multibr7_153665317_1003528&gclsrc=aw.ds&gad_source=1&gad_campaignid=687290597&gbraid=0AAAAADQ3sJ2HHOXY6cZ3WSWtss_mkV4v7&gclid=CjwKCAjwpcTNBhA5EiwAdO1S9vRmauiEvw9u-EWo7wFvlllo2RMVLfWBbhz6806Fzy8xIkTSB9ROZxoCjlYQAvD_BwE"
					}
					className={"underline decoration-1"}
					target="_blank"
				>
					Hampton Inn by Hilton
				</Link>
				,{" "}
				<Link
					href={
						"https://www.holidayinn.com/hotels/us/en/find-hotels/hotel-search?qDest=Greater%20Sudbury,%20ON,%20Canada&qPt=CASH&qCiD=31&qCoD=2&qCiMy=062026&qCoMy=072026&qAdlt=1&qChld=0&qRms=1&qRtP=6CBARC&srb_u=1&qFS=false&qSrt=sBR&qBrs=6c.hi.ex.sb.ul.ic.cp.cw.in.vn.cv.rs.ki.kd.ma.sp.va.sp.re.vx.nd.sx.we.lx.rn.sn.sn.sn.sn.sn.nu.ge&qWch=0&qSmP=0&qRad=30&qRdU=mi&setPMCookies=false&qpMbw=0&qErm=false&qpMn=1"
					}
					className={"underline decoration-1"}
					target="_blank"
				>
					Holiday Inn Sudbbury by IHG
				</Link>
				, and the{" "}
				<Link
					href={
						"https://www.hotelsone.com/sudbury-hotels-ca/days-inn-by-wyndham-sudbury-conference-centre.html?dsti=12361&dstt=8&nid=1&as=g&aid=792306665278&cmpid=19805078&agid=181797578324&gid=CjwKCAjwpcTNBhA5EiwAdO1S9rhCes1z5y8x9gTsAiaQXBSBNAxjekNxRzHfzS_ZufXOZZraT9bFARoCRWMQAvD_BwE&gwbrd=Cj8KCAjwgr_NBhABEi8AfzP2p5TDudXbKEiuBDYnwsWqxWiRpCOUoIg5cLUgdBxq_YuiHFkvUqgo1x6pQhoCpC8&ggbrd=0AAAAAD4o1Pd8BAo6T0ImZESmpzP-Hu0ln&gad_source=1&gad_campaignid=19805078&gbraid=0AAAAAD4o1Pd8BAo6T0ImZESmpzP-Hu0ln&gclid=CjwKCAjwpcTNBhA5EiwAdO1S9rhCes1z5y8x9gTsAiaQXBSBNAxjekNxRzHfzS_ZufXOZZraT9bFARoCRWMQAvD_BwE"
					}
					className={"underline decoration-1"}
					target="_blank"
				>
					Days Inn by Wyndham
				</Link>
				.
				<br />
				<br />
				There are also many nice{" "}
				<Link
					href={
						"https://www.airbnb.ca/s/Greater-Sudbury--ON/homes?place_id=ChIJpQfPY5UAL00RLNb6pK2th1w&refinement_paths%5B%5D=%2Fhomes&checkin=2026-07-31&checkout=2026-08-02&date_picker_type=calendar&guests=2&search_type=unknown&query=Greater%20Sudbury%2C%20ON&flexible_trip_lengths%5B%5D=one_week&monthly_start_date=2026-04-01&monthly_length=3&monthly_end_date=2026-07-01&search_mode=regular_search&price_filter_input_type=2&price_filter_num_nights=2&channel=EXPLORE&source=structured_search_input_header"
					}
					className={"underline decoration-1"}
					target="_blank"
				>
					Airbnbs
				</Link>{" "}
				in the Greater Sudbury area.
			</p>
		),
	},
	{
		q: <h1>Can I bring a plus one?</h1>,
		a: (
			<p>
				If we have specified "and guest" on your invitation envelope, then yes!
				If not, we kindly request that you refrain from bringing any guests, as
				our seating is limited.
			</p>
		),
	},
	{
		q: <h1>What if I have dietary restrictions?</h1>,
		a: (
			<p>
				Please specify on each guest's RSVP form if they have any dietary
				restrictions.
			</p>
		),
	},
	{
		q: <h1>Why do we have to arrive so early?</h1>,
		a: (
			<p>
				The wedding will be held at the McClure residence on South Lane Road.
				Since this is a residential address with a long driveway, we want to
				ensure guests have ample time to park and be shuttled to the house
				before the ceremony.
			</p>
		),
	},
	{
		q: (
			<h1>
				What if I can't physically attend, but I still want to participate?
			</h1>
		),
		a: (
			<p>
				We plan to have a live stream running for those who cannot physically
				attend, but still wish to watch. If you wish to partake in the live
				stream, please email Megan at{" "}
				<Link
					href={"mailto:meganemcclure@gmail.com"}
					className={"underline  decoration-1"}
				>
					meganemcclure@gmail.com
				</Link>
				.
			</p>
		),
	},
	{
		q: <h1>Do you have a gift registry?</h1>,
		a: (
			<p>
				We are currently living in a small apartment, and don't have much room
				for physical items. If you wish to give a gift, we would appreciate
				contributions to our house/honeymoon fund.
			</p>
		),
	},
];

export default function FAQPage() {
	return (
		<div className="h-fit w-full flex justify-center items-start py-auto p-6 py-[120px]">
			<div className="animate-appearfast w-full max-w-3xl flex flex-col justify-center items-center gap-8 p-4 bg-background p-4 md:p-10 lg:p-12 rounded-lg drop-shadow-2xl">
				<h1
					className={
						"w-full text-4xl md:text-6xl lg:text-7xl text-primary -mb-4 md:-mb-6 lg:-mb-9"
					}
					style={{ fontFamily: "Italianno, serif" }}
				>{`Frequently Asked Questions`}</h1>
				<Accordion
					type="single"
					collapsible
					className="w-full max-w-3xl"
					defaultValue="item-1"
				>
					{questions.map((question, index) => (
						<AccordionItem value={index.toString()} key={index}>
							<AccordionTrigger className="text-4xl text-left hover:underline decoration-1 underline-offset-4">
								{question.q}
							</AccordionTrigger>
							<AccordionContent className="flex flex-col gap-4 text-lg">
								{question.a}
							</AccordionContent>
						</AccordionItem>
					))}
				</Accordion>
				<p className="text-lg">
					If you have any other questions or concerns not covered here please
					contact Megan at{" "}
					<Link
						href={"mailto:meganemcclure@gmail.com"}
						className={"underline  decoration-1"}
					>
						meganemcclure@gmail.com
					</Link>
				</p>
			</div>
		</div>
	);
}
