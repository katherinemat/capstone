using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace capstone.Controllers
{
    [Route("api/[controller]")] //api/news is this route
    public class NewsController : Controller
    {
        //would be replaced with database stuff instead
        private static Story[] _stories = new Story[]
        {
            new Story{ Id = 1, Title = "test1", Author = "test", Date = "test", Content = "test" },
            new Story{ Id = 2, Title = "test2", Author = "test", Date = "test", Content = "test" },
            new Story{ Id = 3, Title = "test3", Author = "test", Date = "test", Content = "test" },
            new Story{ Id = 4, Title = "test4", Author = "test", Date = "test", Content = "test" }
        };

        [HttpGet("[action]")]
        public IActionResult GetStories()
        {
            //look up ObjectResult datatype. Video guy says that it's useful if return not-found
            return new ObjectResult(_stories);
        }

        [HttpGet("[action]/{id}")]
        public IActionResult GetStoryDetail(int id)
        {
            var story = _stories.FirstOrDefault(s => s.Id == id);
            if (story == null)
            {
                return NotFound();
            }
            return new ObjectResult(new StoryDetail { Story = story });
        }
    }

    public class Story
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Author { get; set; }
        public string Date { get; set; }
        public string Content { get; set; }
    }

    public class StoryDetail
    {
        public Story Story { get; set; }
    }
}
