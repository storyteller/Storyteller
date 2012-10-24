namespace StoryTeller.Testing
{
    public class Address
    {
        public string Address1 { get; set; }
        public string Address2 { get; set; }
        public string City { get; set; }
        public string StateOrProvince { get; set; }
        public string Country { get; set; }
        public string PostalCode { get; set; }
        public string TimeZone { get; set; }

        public double DistanceFromOffice { get; set; }

        public string[] Names { get; set; }
    }

    public class Site
    {
        public string Name { get; set; }
        public string Phone { get; set; }
        public string Fax { get; set; }
        public string Notes { get; set; }
        public Address PrimaryAddress { get; set; }
    }
}