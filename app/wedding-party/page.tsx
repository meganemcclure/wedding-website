import { Separator } from "@radix-ui/react-separator";
import BrianAndMeg from "@/public/Megan_and_Brian_Engagement_aKaiserPhoto_Feb_1_2026-75.jpg";
import lilly from "@/public/lilly.jpeg";
import irena from "@/public/irena.jpg";

const BRIDESMAIDS = [
	{
		name: "Lillian McClure",
		title: "Maid of Honour",
		description:
			"Hello! I’m Lilly, Megan’s younger sister and maid of honour (yay!). I currently live in Philadelphia, where I attend Temple University’s School of Dentistry. Growing up, everyone mistook Megan and me for twins—I was the more outgoing one, while Meg was always a bit more shy. From exploring the woods where we grew up looking for fairies and making home movies to now visiting each other and exploring the new cities we live in, Megan and I have always been best friends. I knew Megan and Brian were great together when I first met him eight years ago, but spending time in their home and watching them craft and cook together makes me even more excited to celebrate them both!",
		img: <img src={lilly.src} alt={""} className="scale-[102%] pl-1" />,
		imgAlt: "",
	},
	{
		name: "Ashley Piché",
		title: "Bridesmaid",
		description:
			"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
		img: (
			<img
				src={BrianAndMeg.src}
				alt={""}
				className="scale-[260%] object-[25%_75%] pr-4 pt-4"
			/>
		),
		imgAlt: "",
	},
	{
		name: "Breanna Piché",
		title: "Bridesmaid",
		description:
			"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
		img: (
			<img
				src={BrianAndMeg.src}
				alt={""}
				className="scale-[260%] object-[25%_75%] pr-4 pt-4"
			/>
		),
		imgAlt: "",
	},
	{
		name: "Irena Dunjic",
		title: "Bridesmaid",
		description:
			"Hi, I'm Irena, one of Megan's bridesmaids! Megan and I met in our first year at Queen's University. After many study sessions, group projects, and coffee walks, we became close friends. We ended up living together in our final year of university, and again after we graduated, when we moved to Toronto.",
		img: <img src={irena.src} alt={""} />,
		imgAlt: "",
	},
];

const GROOMSMEN = [
	{
		name: "Trey Ricci",
		title: "Best Man",
		description:
			"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
		img: (
			<img
				src={BrianAndMeg.src}
				alt={""}
				className="scale-[260%] object-[25%_75%] pr-4 pt-4"
			/>
		),
		imgAlt: "",
	},
	{
		name: "Devon Gavin",
		title: "Groomsman",
		description:
			"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
		img: (
			<img
				src={BrianAndMeg.src}
				alt={""}
				className="scale-[260%] object-[25%_75%] pr-4 pt-4"
			/>
		),
		imgAlt: "",
	},
	{
		name: "Justin Savarie",
		title: "Groomsman",
		description:
			"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
		img: (
			<img
				src={BrianAndMeg.src}
				alt={""}
				className="scale-[260%] object-[25%_75%] pr-4 pt-4"
			/>
		),
		imgAlt: "",
	},
];

const PARENTS = [
	{
		name: "Rebecca & Scott McClure",
		title: "Mother and Father of the Bride",
		description:
			"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
		img: (
			<img
				src={BrianAndMeg.src}
				alt={""}
				className="scale-[260%] object-[25%_75%] pr-4 pt-4"
			/>
		),
		imgAlt: "",
	},
	{
		name: "Sherry & Chuck Piché",
		title: "Mother and Father of the Groom",
		description:
			"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
		img: (
			<img
				src={BrianAndMeg.src}
				alt={""}
				className="scale-[260%] object-[25%_75%] pr-4 pt-4"
			/>
		),
		imgAlt: "",
	},
];

const Profile = ({
	title,
	name,
	description,
	img,
	imgAlt,
	className,
}: {
	name: string;
	title?: string;
	description?: string;
	img?: any;
	imgAlt: string;
	className?: string;
}) => {
	return (
		<div
			className={`w-full flex flex-col items-center justify-start gap-8 ${className}`}
		>
			<div className="w-full max-h-[400px] overflow-hidden bg-white">{img}</div>
			<span className="flex flex-col w-full gap-0">
				<h1 className="text-4xl">{name}</h1>
				<h2 className="text-lg text-primary">{title}</h2>
				{description && <p className="pt-4">{description}</p>}
			</span>
		</div>
	);
};

export default function FAQPage() {
	return (
		<div className="h-fit w-full flex justify-center items-start py-auto p-6 py-[120px]">
			<div className="animate-appearfast w-full max-w-3xl flex flex-col justify-center items-center gap-8 md:gap-12 p-4 bg-background p-4 md:p-10 lg:p-12 rounded-lg drop-shadow-2xl">
				<h1
					className={
						"w-full text-4xl md:text-6xl lg:text-7xl text-primary -mb-4 md:-mb-6 lg:-mb-9"
					}
					style={{ fontFamily: "Italianno, serif" }}
				>{`Intro to the Wedding Party`}</h1>

				<Profile
					name={"Megan & Brian"}
					title={"Bride & Groom"}
					description={
						"Hello all! We're Megan and Brian, the bride and groom. We're so excited to have you all here celebrating our big day with us! We met in the summer of 2016, before we both headed off to university. Brian to Laurentian, and Megan to Queen's. By the time Canadian Thanksgiving had rolled around, we were officially dating. After 6 years of long distance dating (and many car rides back and forth) we finally moved in together in the winter of 2023. This October marks our 10th anniversary together, and we're topping it off by finally tying the knot this summer! We're so grateful to be surrounded by the people who mean the most to us, and we can't wait to celebrate this next chapter with all of you!"
					}
					img={
						<img
							src={BrianAndMeg.src}
							alt={""}
							className="scale-[300%] object-[25%_75%] pr-4 pt-8"
						/>
					}
					imgAlt={"Megan & Brian"}
				/>

				<div className="pt-4 flex flex-col w-full">
					<h1
						className="w-full text-5xl md:text-6xl"
						style={{ fontFamily: "Italianno, serif" }}
					>
						Bridesmaids
					</h1>
					<Separator className="w-full col-span-full border" />
				</div>
				{BRIDESMAIDS.map((person, index) => (
					<Profile
						key={index}
						name={person.name}
						title={person.title}
						description={person.description}
						img={person.img}
						imgAlt={person.imgAlt}
					/>
				))}

				<div className="pt-4 flex flex-col w-full">
					<h1
						className="w-full text-5xl md:text-6xl"
						style={{ fontFamily: "Italianno, serif" }}
					>
						Groomsmen
					</h1>
					<Separator className="w-full col-span-full border" />
				</div>
				{GROOMSMEN.map((person, index) => (
					<Profile
						key={index}
						name={person.name}
						title={person.title}
						description={person.description}
						img={person.img}
						imgAlt={person.imgAlt}
					/>
				))}

				<div className="pt-4 flex flex-col w-full">
					<h1
						className="w-full text-5xl md:text-6xl"
						style={{ fontFamily: "Italianno, serif" }}
					>
						Parents
					</h1>
					<Separator className="w-full col-span-full border" />
				</div>
				{PARENTS.map((person, index) => (
					<Profile
						key={index}
						name={person.name}
						title={person.title}
						description={person.description}
						img={person.img}
						imgAlt={person.imgAlt}
					/>
				))}
			</div>
		</div>
	);
}
