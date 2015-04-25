var webdriver = require('selenium-webdriver');
var util = require('util');

var driver = new webdriver.Builder().
withCapabilities(webdriver.Capabilities.chrome()).
build();

//
//<li data-endorsed-item-name="Mobile Applications" class="endorse-item has-endorsements endorsable" data-endorsement-id=""><span class="skill-pill"><a class="endorse-count" href="javascript:void(0)" role="button" title="See endorsers"><span class="num-endorsements" data-count="25">25</span></a><span class="endorse-item-name"><a href="/vsearch/f?keywords=Mobile+Applications&amp;trk=profile-skill-section" title="Search for Mobile Applications" 
//
//class="endorse-item-name-text">Mobile Applications</a>
//
//</span></span><div class="endorsers-container"><ul class="endorsers-pics"><li class="viewer-pic-container"><span data-tracking="" class="new-miniprofile-container /profile/mini-profile-with-connections?_ed=0_bWNDj98R3Qat_RfHw1YD3A6sBKqhO5wbjJciMVxdE8Ndl5j_d34wjDkA3Z77CTYR" data-li-url="/profile/mini-profile-with-connections?_ed=0_bWNDj98R3Qat_RfHw1YD3A6sBKqhO5wbjJciMVxdE8Ndl5j_d34wjDkA3Z77CTYR" data-li-tl="tl/shared/profile/mini_profile_shell"><strong><img class="viewer-pic small-thumbnail " width="30" height="30" src="https://media.licdn.com/mpr/mpr/shrink_100_100/p/3/005/05a/16a/336d6fc.jpg"></strong></span></li><li><span data-tracking="" class="new-miniprofile-container /profile/mini-profile-with-connections?_ed=0_bWNDj98R3Qat_RfHw1YD3A6sBKqhO5wbjJciMVxdE8NlDCdh59paC8wgY0wJvfts" data-li-url="/profile/mini-profile-with-connections?_ed=0_bWNDj98R3Qat_RfHw1YD3A6sBKqhO5wbjJciMVxdE8NlDCdh59paC8wgY0wJvfts" data-li-tl="tl/shared/profile/mini_profile_shell"><strong><img class="endorser small-thumbnail " width="30" height="30" src="https://media.licdn.com/mpr/mpr/shrink_100_100/p/6/005/0aa/326/2163936.jpg"></strong></span></li><li><span data-tracking="" class="new-miniprofile-container /profile/mini-profile-with-connections?_ed=0_bWNDj98R3Qat_RfHw1YD3A6sBKqhO5wbjJciMVxdE8OyaGIOv6eBYUGfO6Rrn3ls" data-li-url="/profile/mini-profile-with-connections?_ed=0_bWNDj98R3Qat_RfHw1YD3A6sBKqhO5wbjJciMVxdE8OyaGIOv6eBYUGfO6Rrn3ls" data-li-tl="tl/shared/profile/mini_profile_shell"><strong><img class="endorser small-thumbnail " width="30" height="30" src="https://media.licdn.com/mpr/mpr/shrink_100_100/p/4/000/165/0d5/0613ca2.jpg"></strong></span></li><li><span data-tracking="" class="new-miniprofile-container /profile/mini-profile-with-connections?_ed=0_bWNDj98R3Qat_RfHw1YD3A6sBKqhO5wbjJciMVxdE8OaCIHah8U1blRvIR874mIz" data-li-url="/profile/mini-profile-with-connections?_ed=0_bWNDj98R3Qat_RfHw1YD3A6sBKqhO5wbjJciMVxdE8OaCIHah8U1blRvIR874mIz" data-li-tl="tl/shared/profile/mini_profile_shell"><strong><img class="endorser small-thumbnail " width="30" height="30" src="https://media.licdn.com/mpr/mpr/shrink_100_100/p/1/000/0d9/103/18859cc.jpg"></strong></span></li><li><span data-tracking="" class="new-miniprofile-container /profile/mini-profile-with-connections?_ed=0_bWNDj98R3Qat_RfHw1YD3A6sBKqhO5wbjJciMVxdE8OKgh8AdkWet5yGGwAlzupJ" data-li-url="/profile/mini-profile-with-connections?_ed=0_bWNDj98R3Qat_RfHw1YD3A6sBKqhO5wbjJciMVxdE8OKgh8AdkWet5yGGwAlzupJ" data-li-tl="tl/shared/profile/mini_profile_shell"><strong><img class="endorser small-thumbnail " width="30" height="30" src="https://media.licdn.com/mpr/mpr/shrink_100_100/p/7/005/078/38d/0d53819.jpg"></strong></span></li><li><span data-tracking="" class="new-miniprofile-container /profile/mini-profile-with-connections?_ed=0_bWNDj98R3Qat_RfHw1YD3A6sBKqhO5wbjJciMVxdE8NMLUDoMoykNpRJDwEGnTS1" data-li-url="/profile/mini-profile-with-connections?_ed=0_bWNDj98R3Qat_RfHw1YD3A6sBKqhO5wbjJciMVxdE8NMLUDoMoykNpRJDwEGnTS1" data-li-tl="tl/shared/profile/mini_profile_shell"><strong><img class="endorser small-thumbnail " width="30" height="30" src="https://media.licdn.com/mpr/mpr/shrink_100_100/p/2/000/084/254/016ae62.jpg"></strong></span></li><li><span data-tracking="" class="new-miniprofile-container /profile/mini-profile-with-connections?_ed=0_3tuhFZSemuUGDeRGOo76tDJp7E6ffhkExV8pdCWoTusH0xVp6mDGtH8XIR4BubKI" data-li-url="/profile/mini-profile-with-connections?_ed=0_3tuhFZSemuUGDeRGOo76tDJp7E6ffhkExV8pdCWoTusH0xVp6mDGtH8XIR4BubKI" data-li-tl="tl/shared/profile/mini_profile_shell"><strong><img class="endorser small-thumbnail " width="30" height="30" src="https://media.licdn.com/mpr/mpr/shrink_100_100/p/2/000/0d3/1b5/1d3e472.jpg"></strong></span></li><li><span data-tracking="" class="new-miniprofile-container /profile/mini-profile-with-connections?_ed=0_bWNDj98R3Qat_RfHw1YD3A6sBKqhO5wbjJciMVxdE8MyYf7RszGvylesbJAGGhgB" data-li-url="/profile/mini-profile-with-connections?_ed=0_bWNDj98R3Qat_RfHw1YD3A6sBKqhO5wbjJciMVxdE8MyYf7RszGvylesbJAGGhgB" data-li-tl="tl/shared/profile/mini_profile_shell"><strong><img class="endorser small-thumbnail " width="30" height="30" src="https://media.licdn.com/mpr/mpr/shrink_100_100/p/8/005/017/25e/290940c.jpg"></strong></span></li><li><span data-tracking="" class="new-miniprofile-container /profile/mini-profile-with-connections?_ed=0_bWNDj98R3Qat_RfHw1YD3A6sBKqhO5wbjJciMVxdE8MQe-LzurSAyyXeMcGpVlAO" data-li-url="/profile/mini-profile-with-connections?_ed=0_bWNDj98R3Qat_RfHw1YD3A6sBKqhO5wbjJciMVxdE8MQe-LzurSAyyXeMcGpVlAO" data-li-tl="tl/shared/profile/mini_profile_shell"><strong><img class="endorser small-thumbnail " width="30" height="30" src="https://static.licdn.com/scds/common/u/images/themes/katy/ghosts/person/ghost_person_30x30_v1.png"></strong></span></li><li><span data-tracking="" class="new-miniprofile-container /profile/mini-profile-with-connections?_ed=0_VQV8-V-t3JKW-l5j694yj6CdSDRuElcInmzcIf1LN3oom2NzvY0abFxTYmjYyFzY" data-li-url="/profile/mini-profile-with-connections?_ed=0_VQV8-V-t3JKW-l5j694yj6CdSDRuElcInmzcIf1LN3oom2NzvY0abFxTYmjYyFzY" data-li-tl="tl/shared/profile/mini_profile_shell"><strong><img class="endorser small-thumbnail " width="30" height="30" src="https://media.licdn.com/mpr/mpr/shrink_100_100/p/1/000/0af/0ee/032365e.jpg"></strong></span></li><li><span data-tracking="" class="new-miniprofile-container /profile/mini-profile-with-connections?_ed=0_bWNDj98R3Qat_RfHw1YD3A6sBKqhO5wbjJciMVxdE8MeDIDBfkJFppQ4PAZpjssq" data-li-url="/profile/mini-profile-with-connections?_ed=0_bWNDj98R3Qat_RfHw1YD3A6sBKqhO5wbjJciMVxdE8MeDIDBfkJFppQ4PAZpjssq" data-li-tl="tl/shared/profile/mini_profile_shell"><strong><img class="endorser small-thumbnail " width="30" height="30" src="https://media.licdn.com/mpr/mpr/shrink_100_100/p/3/000/1e0/222/164e5de.jpg"></strong></span></li><li><span data-tracking="" class="new-miniprofile-container /profile/mini-profile-with-connections?_ed=0_VQV8-V-t3JKW-l5j694yj6CdSDRuElcInmzcIf1LN3pa_4nUgNiN-7FOk3RNBjiZ" data-li-url="/profile/mini-profile-with-connections?_ed=0_VQV8-V-t3JKW-l5j694yj6CdSDRuElcInmzcIf1LN3pa_4nUgNiN-7FOk3RNBjiZ" data-li-tl="tl/shared/profile/mini_profile_shell"><strong><img class="endorser small-thumbnail " width="30" height="30" src="https://media.licdn.com/mpr/mpr/shrink_100_100/p/2/000/208/05b/25b92c2.jpg"></strong></span></li><li class="endorsers-action"><a class="see-all-endorsers" href="javascript:void(0)" role="button"><span class="loader"></span></a></li></ul><a href="javascript:void(0)" role="button" class="endorse-button"><span class="endorsing">
//
//<span class="endorse-plus">&nbsp;</span><span class="endorse-minus">&nbsp;</span>
//<span class="endorse-text">Endorse</span><span class="unendorse-text">Remove Endorsement</span></span><span class="line-container"><span class="hr-line"></span></span></a></div></li>
//
//
//
var showTopics = function () {
  console.log("in showTopics");
  driver.findElements(webdriver.By.className('endorse-item-name-text'))
    .then(function (skills) {

      for (var i = 0; i < skills.length; i++) {
        console.log(skills[i].getText().then(function (skill) {
          console.log(skill)
        }));
      }
    });
};
//
driver.get('http://www.linkedin.com');
driver.findElement(webdriver.By.id('session_key-login')).sendKeys(process.env.LINKEDIN_USERNAME);
driver.findElement(webdriver.By.id('session_password-login')).sendKeys(process.env.LINKEDIN_PASSWORD);
driver.findElement(webdriver.By.id('signin')).click();
var result = driver.wait(function () {
    return driver.getTitle().then(function (title) {
      console.log('browser title: ', title);
      return title === 'Welcome! | LinkedIn';
    });
  }, 1000)
  .then(function () {
    console.log('After title matches');
    driver.get(process.env.LINKEDIN_CONTACT_URL);
    driver.wait(function () {
      return driver.getTitle().then(function (title) {
        console.log('browser title: ', title);
        if (title.match(process.env.LINKEDIN_CONTACT_NAME)) {
          showTopics();
        }
        return title.match(process.env.LINKEDIN_CONTACT_NAME);
      });
    }, 1000)

    //console.log('element: ', util.inspect(elem));
  });


//driver.quit();