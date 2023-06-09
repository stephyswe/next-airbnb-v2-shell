import Container from "@/components/Container";
import EmptyState from "@/components/EmptyState";
import Heading from "@/components/Heading";
import ListingCardContainerAction from "@/components/listings/ListingCardContainerAction";

import getCurrentUser from "@/libs/actions/getCurrentUser";
import getReservations from "@/libs/actions/getReservations";

const TripsPage = async () => {
  const currentUser = await getCurrentUser();
  const reservations = await getReservations({ userId: currentUser?.id });

  if (reservations.length === 0) {
    return (
      <EmptyState
        title="No trips found"
        subtitle="Looks like you havent reserved any trips."
      />
    );
  }

  return (
    <Container>
      <Heading
        title="Trips"
        subtitle="Where you've been and where you're going"
      />
      <ListingCardContainerAction
        data={reservations}
        currentUser={currentUser}
        route="reservations"
        toastMessage="Reservation canceled"
        actionLabel="Cancel reservation"
      />
    </Container>
  );
};

export default TripsPage;
