using System.Collections.Generic;
using System.Linq;
using Newtonsoft.Json;

namespace snowjoe_linq {

    public class Person {
        public int personID { get; set; }
        public string pet { get; set; }
    }

    class PetOwner {
        public int personID { get; set; }
        public List<string> pets { get; set; }
    }

    class Program {
        static void Main(string[] args) {

            var persons = new List<Person>() {
                new Person { personID = 1, pet = "Dog" },
                new Person { personID = 1, pet = "Snake" },
                new Person { personID = 2, pet = "Dog" },
                new Person { personID = 1, pet = "Walrus" },
                new Person { personID = 2, pet = "Cat" },
                new Person { personID = 1, pet = "Caterpillar" },
                new Person { personID = 3, pet = "Cat" },
                new Person { personID = 2, pet = "Goat" },
                new Person { personID = 3, pet = "Fish" },
            };

            var linqResults = from person in persons
            group person.pet by person.personID into groupedObj
            select new PetOwner { personID = groupedObj.Key, pets = groupedObj.ToList() };

            foreach (var obj in linqResults) {
                System.Console.WriteLine(JsonConvert.SerializeObject(obj));
            }
        }
    }
}
