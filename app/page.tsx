import Container from "@/components/Container";
import EmptyState from "@/components/EmptyState";
import ListingCardContainer from "@/components/listings/ListingCardContainer";

import getCurrentUser from "@/libs/actions/getCurrentUser";
import getListings, { IListingsParams } from "@/libs/actions/getListings";

export const dynamic = "force-dynamic";

interface HomeProps {
  searchParams: IListingsParams;
}

const Home = async ({ searchParams }: HomeProps) => {
  const listings = await getListings(searchParams);
  const currentUser = await getCurrentUser();

  if (listings.length === 0) {
    return <EmptyState showReset />;
  }

  // throw new Error("Something went wrong");

  return (
    <Container>
      <ListingCardContainer
        root
        currentUser={currentUser}
        listings={listings}
      />
    </Container>
  );
};

export default Home;
