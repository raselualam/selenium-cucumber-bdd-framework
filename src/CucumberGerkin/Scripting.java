package CucumberGerkin;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Scripting {
	WebDriver driver;

	@Given("^Open firefox and start application$")
	 public void open_firefox_and_start_application() throws Throwable {
	  driver = new FirefoxDriver();
	  driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS); 
	  driver.navigate().to("http://newtours.demoaut.com/mercurywelcome.php");
	  driver.manage().window().maximize();
	 }
	 @When("^I enter valid \"([^\"]*)\" and valid \"([^\"]*)\"$")
	 public void i_enter_valid_user_Id_and_valid_password(String uname, String pass) throws Throwable {
	  driver.findElement(By.name("userName")).sendKeys(uname);
	  driver.findElement(By.name("password")).sendKeys(pass);
	    
	 }
	 @Then("^User should be able to login sucessfully$")
	 public void user_should_be_able_to_login_sucessfully() throws Throwable {
	  
	  driver.findElement(By.name("login")).click();
	    
	 }
	 @Then("^Applicagtion should be closed$")
	 public void applicagtion_should_be_closed() throws Throwable {
	    driver.quit();
	 }


}
