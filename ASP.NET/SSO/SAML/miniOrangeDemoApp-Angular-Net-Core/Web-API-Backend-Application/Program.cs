using miniOrange.saml;
using System.Reflection;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowLocalhost4200", policy =>
    {
        policy.WithOrigins("http://localhost:4200") // Allow specific origin
              .AllowAnyHeader() // Allow any header
              .AllowAnyMethod() // Allow any HTTP method
              .AllowCredentials();
    });
});
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddminiOrangeServices(Assembly.GetExecutingAssembly());
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();



var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseCors("AllowLocalhost4200");
app.UseAuthorization();

app.UseCookiePolicy();
app.UseAuthentication();
app.UseStaticFiles();
app.UseminiOrangeSAMLSSOMiddleware();

app.MapControllers();


app.Run();
