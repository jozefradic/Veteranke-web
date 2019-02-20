using Microsoft.EntityFrameworkCore.Migrations;

namespace Veteran.Api.Migrations
{
    public partial class AdvUpdate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Desc",
                table: "Advertisements",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "Price",
                table: "Advertisements",
                nullable: false,
                defaultValue: 0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Desc",
                table: "Advertisements");

            migrationBuilder.DropColumn(
                name: "Price",
                table: "Advertisements");
        }
    }
}
