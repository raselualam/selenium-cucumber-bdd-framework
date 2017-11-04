package CucumberGerkin;
import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		  features="feature",
		  glue="CucumberGerkin",
		  plugin = {"html:target/cucumber-html-report"}
		  )

public class CucumberGenkinsTest {
//Install from Marketplace Junit
//Install from Marketplace Cucumber
//Project convert Maven
//pom.xml put Depencies from Shahid bai mail
//Create FOLDER for feature file and link with TEST class into features="feature"
//put package file to test file in glue
//	
}
