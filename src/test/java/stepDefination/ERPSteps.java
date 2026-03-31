package stepDefination;

import java.time.Duration;

import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.Assert;
import org.testng.Reporter;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class ERPSteps {
	WebDriver driver;
	String Expected_Number ="";
	String Actual_Number ="";
	@Given("User is on the Login Page")
	public void launchUrl() {
		driver = new ChromeDriver();
		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(20));
		driver.get("http://webapp.qedgetech.com/");

	}

	@When("User enters username {string} and password {string}")
	public void user_enters_username_and_password(String user, String pass) {
		driver.findElement(By.name("username")).clear();
		driver.findElement(By.name("username")).sendKeys(user);
		driver.findElement(By.name("password")).clear();
		driver.findElement(By.name("password")).sendKeys(pass);
	}

	@When("clicks on Login button")
	public void clicks_on_Login_button() throws Throwable {
		driver.findElement(By.name("btnsubmit")).click();
		Thread.sleep(1000);
	}

	@Then("Dashboard should be displayed")
	public void dashboard_should_be_displayed() throws Throwable {
		if(driver.findElement(By.xpath("//span[@id='ewPageCaption']")).isDisplayed())
		{
			System.out.println("Dashboard page Displayed");
		}
		Thread.sleep(1000);
	}

	@When("user should navigate to add supplier page")
	public void user_should_navigate_to_add_supplier_page() throws Throwable {
		driver.findElement(By.xpath("(//a[contains(text(),'Suppliers')])[2]")).click();
		Thread.sleep(1000);
		driver.findElement(By.xpath("(//span[@data-caption='Add'])[1]")).click();
		Thread.sleep(1000);
	}

	@When("user capture Supplier number")
	public void user_capture_Supplier_number() throws Throwable {
		Expected_Number = driver.findElement(By.name("x_Supplier_Number")).getAttribute("value");
		Thread.sleep(1000);
	}

	@When("User enters Supplier Details {string}, {string}, {string}, {string}, {string}, {string}, {string}, {string}, {string}")
	public void user_enters_Supplier_Details(String sname, String Address, String city, String country,
			String cperson, String pnumber, String email, String mnumber, String notes) throws Throwable {
		driver.findElement(By.name("x_Supplier_Name")).sendKeys(sname);
		driver.findElement(By.name("x_Address")).sendKeys(Address);
		driver.findElement(By.name("x_City")).sendKeys(city);
		driver.findElement(By.name("x_Country")).sendKeys(country);
		driver.findElement(By.name("x_Contact_Person")).sendKeys(cperson);
		driver.findElement(By.name("x_Phone_Number")).sendKeys(pnumber);
		driver.findElement(By.name("x__Email")).sendKeys(email);
		driver.findElement(By.name("x_Mobile_Number")).sendKeys(mnumber);
		driver.findElement(By.name("x_Notes")).sendKeys(notes);
		Thread.sleep(1000);

	}

	@When("user click add button")
	public void user_click_add_button() throws Throwable {
		driver.findElement(By.id("btnAction")).sendKeys(Keys.ENTER);
		Thread.sleep(2000);
	}

	@When("user click confirm ok button")
	public void user_click_confirm_ok_button() throws Throwable {
		driver.findElement(By.xpath("//button[normalize-space()='OK!']")).click();
		Thread.sleep(2000);
	}

	@When("user click alert ok button")
	public void user_click_alert_ok_button() throws Throwable {
		driver.findElement(By.xpath("(//button[starts-with(text(),'OK')])[6]")).click();
		Thread.sleep(2000);
	}

	@When("user search for supplier number")
	public void user_search_for_supplier_number() throws Throwable {
		if(!driver.findElement(By.xpath("//input[@id='psearch']")).isDisplayed()) 
			//click search panel 
			driver.findElement(By.xpath("//span[@data-caption='Search']")).click();
		driver.findElement(By.xpath("//input[@id='psearch']")).clear();
		Thread.sleep(1000);
		driver.findElement(By.xpath("//input[@id='psearch']")).sendKeys(Expected_Number);
		driver.findElement(By.xpath("//button[@id='btnsubmit']")).click();
		Thread.sleep(3000);


	}

	@Then("user verify supplier number in table")
	public void user_verify_supplier_number_in_table() {
		Actual_Number = driver.findElement(By.xpath("//table[@class='table ewTable']/tbody/tr[1]/td[6]/div/span/span")).getText();
		Reporter.log(Expected_Number+"             "+Actual_Number,true);
		try {
			Assert.assertEquals(Actual_Number, Expected_Number, "Supplier Number Not Found in Table");
		} catch (AssertionError e) {
			Reporter.log(e.getMessage(),true);
		}
	}

	@When("user close browser")
	public void user_close_browser() {
		driver.quit();
	}
	@When("user should navigate to add customer page")
	public void user_should_navigate_to_add_customer_page() throws Throwable {
		driver.findElement(By.xpath("(//a[text()='Customers'])[2]")).click();
		Thread.sleep(1000);
		driver.findElement(By.xpath("(//span[@data-caption='Add'])[1]")).click();
		Thread.sleep(1000); 
	}

	@When("user capture customer number")
	public void user_capture_customer_number() throws Throwable {
		Expected_Number = driver.findElement(By.name("x_Customer_Number")).getAttribute("value");
		Thread.sleep(1000);
	}

	@When("User enters customer Details {string}, {string}, {string}, {string}, {string}, {string}, {string}, {string}, {string}")
	public void user_enters_customer_Details(String cname, String Address, String city, String country, String cperson, String pnumber, String email, String mnumber, String notes) throws Throwable {
		driver.findElement(By.name("x_Customer_Name")).sendKeys(cname);
		driver.findElement(By.name("x_Address")).sendKeys(Address);
		driver.findElement(By.name("x_City")).sendKeys(city);
		driver.findElement(By.name("x_Country")).sendKeys(country);
		driver.findElement(By.name("x_Contact_Person")).sendKeys(cperson);
		driver.findElement(By.name("x_Phone_Number")).sendKeys(pnumber);
		driver.findElement(By.name("x__Email")).sendKeys(email);
		driver.findElement(By.name("x_Mobile_Number")).sendKeys(mnumber);
		driver.findElement(By.name("x_Notes")).sendKeys(notes);
		Thread.sleep(1000);
	}

	@When("user search for customer number")
	public void user_search_for_customer_number() throws Throwable {
		if(!driver.findElement(By.xpath("//input[@id='psearch']")).isDisplayed()) 
			//click search panel 
			driver.findElement(By.xpath("//span[@data-caption='Search']")).click();
		driver.findElement(By.xpath("//input[@id='psearch']")).clear();
		Thread.sleep(1000);
		driver.findElement(By.xpath("//input[@id='psearch']")).sendKeys(Expected_Number);
		driver.findElement(By.xpath("//button[@id='btnsubmit']")).click();
		Thread.sleep(3000);
	}

	@Then("user verify customer number in table")
	public void user_verify_customer_number_in_table() {
		Actual_Number = driver.findElement(By.xpath("//table[@class='table ewTable']/tbody/tr[1]/td[5]/div/span/span")).getText();
		Reporter.log(Expected_Number+"             "+Actual_Number,true);
		try {
			Assert.assertEquals(Actual_Number, Expected_Number, "customer Number Not Found in Table");
		} catch (AssertionError e) {
			Reporter.log(e.getMessage(),true);
		}
	}

	 
}
