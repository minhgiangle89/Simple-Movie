using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace Domain
{
    public class TagView
    {
        public TagView(){}
        public Guid TagId { get; set; }
        public string Name { get; set; }
        public int Entries { get; set; }
    }
}