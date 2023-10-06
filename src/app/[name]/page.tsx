import DisplayComponent from "@/components/DisplayComponent";

const page = ({ params }: { params: { name: string } }) => {
    return (
        <DisplayComponent />
    );
}

export default page;