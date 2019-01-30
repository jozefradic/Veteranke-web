using System;

namespace Veteran.Repository.Models.UserModels
{
    public class Photo
    {
        public int Id { get; set; }
        public string Url { get; set; }
        public string Description { get; set; }
        public DateTime DateAdded { get; set; }

        public string PublicId { get; set; }

        public User User { get; set; }
        public int? UserId { get; set; }

        public Album Album { get; set; }
        public int? AlbumId { get; set; }

        public Advertisement Advertisement { get; set; }
        public int? AdvertisementId { get; set; }

        public Article Article { get; set; }
        public int? ArticleId { get; set; }

    }
}