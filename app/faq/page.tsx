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
				Click the RSVP button on the hompage of our wedding website, and
				complete the google form.
				<br />
				<br />
				Please complete the form once per guest. If you are attending with
				children please complete the form once per child.
				<br />
				<br />
				If you have any questions or concerns about the RSVP feel free to
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
	// {
	// 	q: <h1>When is the RSVP deadline?</h1>,
	// 	a: <p>Please complete the RSVP form by _______</p>,
	// },
	{
		q: <h1>What should I wear?</h1>,
		a: (
			<p>
				Please dress in cocktail or semi-formal attire.
				<br />
				<br />
				We recommend wearing shoes you can walk in. It will be an indoor/outdoor
				event (weather permitting) and there may be gravel, stone steps, grass,
				etc.
			</p>
		),
	},
	{
		q: <h1>Can I bring a plus one?</h1>,
		a: (
			<p>
				If we have specified "and guest" on your invitation envelope, then yes!
				If not we kindly ask that you do not bring any guests, as our seating is
				limited. You can also reference the back of your invitation to see the
				number of seats we have reserved for you.
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
				ensure guests have ample time to park, and be shuttled to the house
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
				We plan to have a live stream running for those that cannot physically
				attend, but still wish to watch. If you wish to partake in the live
				stream please email Megan at{" "}
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
				for physical items. If you wish to give a gift we would appreciate
				donations to our house/honeymoon fund.
			</p>
		),
	},
];

export default function FAQPage() {
	return (
		<div className="h-fit w-full flex justify-center items-start py-auto p-6 py-[120px]">
			<div className="animate-appearfast w-full max-w-3xl flex flex-col justify-center items-center gap-4 p-4 bg-background p-4 md:p-10 lg:p-12 rounded-lg drop-shadow-2xl">
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
