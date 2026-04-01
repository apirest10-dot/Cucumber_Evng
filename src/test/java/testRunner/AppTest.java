package testRunner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import cucumber.api.testng.AbstractTestNGCucumberTests;

@RunWith(Cucumber.class)
@CucumberOptions(dryRun = false,
features = {"./featureFiles/ERP.feature"},
monochrome = true,glue = {"stepDefination"},tags = ("@Customers not,@Suppliers"),
plugin = {"pretty","html:target/report/cucumber.html"})
public class AppTest extends AbstractTestNGCucumberTests{

}
