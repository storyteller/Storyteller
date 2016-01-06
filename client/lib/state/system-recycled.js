/*

    public class SystemRecycled : ClientMessage
    {
        public SystemRecycled() : base("system-recycled")
        {
            properties.Add("ConfigFile", AppDomain.CurrentDomain.SetupInformation.ConfigurationFile);
            properties.Add("BaseDirectory", AppDomain.CurrentDomain.BaseDirectory.ToFullPath());
            properties.Add("BinPath", AppDomain.CurrentDomain.SetupInformation.PrivateBinPath);
            properties.Add("Profile", Project.CurrentProfile);
        }

        public FixtureModel[] fixtures
        {
            get { return _fixtures.ToArray(); }
            set
            {
                _fixtures.Clear();
                _fixtures.AddRange(value);
            }
        }
        public string time = DateTime.Now.ToString("t");

        public string system_name;
        public string system_full_name;
        public bool success;
        public string error;

        private readonly IList<FixtureModel> _fixtures = new List<FixtureModel>(); 

        public string name { get; set; }
        public IDictionary<string, object> properties = new Dictionary<string, object>();

*/

// 'system-recycled'

var {Record, Map, fromJS} = require('immutable');
var _ = require('lodash');

export default function SystemRecycled(state, action) {
    var system = _.extend({}, action);
    
    delete system.fixtures;
    delete system.types;
    system.recycling = false;
    
    var systemState = fromJS(system);
    
    // TODO -- do something with fixtures here too!
    return state.set('system-state', systemState);
}