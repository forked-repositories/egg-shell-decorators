import { Controller } from 'egg';
import { Get, IgnoreJwtAll, Before, After, BeforeAll, AfterAll } from 'egg-shell-decorators';

const Before3 = require('egg-shell-decorators/test/middlewares/before-3');
const Before4 = require('egg-shell-decorators/test/middlewares/before-4');
const Before5 = require('egg-shell-decorators/test/middlewares/before-5');
const Before6 = require('egg-shell-decorators/test/middlewares/before-6');

const After3 = require('egg-shell-decorators/test/middlewares/after-3');
const After4 = require('egg-shell-decorators/test/middlewares/after-4');
const After5 = require('egg-shell-decorators/test/middlewares/after-5');
const After6 = require('egg-shell-decorators/test/middlewares/after-6');

@BeforeAll([ Before3, Before4 ])
@AfterAll([ After3, After4 ])
@IgnoreJwtAll
export default class HomeController extends Controller {

  @Before([ Before5, Before6 ])
  @After([ After5, After6 ])
  @Get('/')
  public index() {
    return 'hi, egg';
  }

}
