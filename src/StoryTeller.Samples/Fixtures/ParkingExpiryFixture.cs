using System;
using StoryTeller.Engine;

namespace StoryTeller.Samples.Fixtures
{
    public class ParkingExpiryFixture : Fixture
    {
        private readonly IParkingSystem _parking;

        public ParkingExpiryFixture()//IParkingSystem parking)
        {
            //_parking = parking;
            Title = "Parking Expiry Rules";
        }

        //[FormatAs("If the day is {day} and the user pays {amount} CDN and stays for {minutes} minutes, there should be a ticket {ticket}")]
        
        [ExposeAsTable("Expiry Ticket Decision Rules")]
        [return: AliasAs("ticketedAmount")]
        public int TicketIsGiven(DayOfWeek day, int minutes, double amount)
        {
            // You would connect this to your service

            //return _parking.GiveThisGuyATicket(day, minutes, amount);
            return 0;
        }
    }

    public interface IParkingSystem 
    {
        bool GiveThisGuyATicket(DayOfWeek day, int minutes, double amount);
    }
}